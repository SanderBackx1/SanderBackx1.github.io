<template>
    <div class="genalgo">
        <v-container>
            <canvas width="750" height="750" ref="canvas"></canvas>
            <p>Current generation: {{ generation }}</p>
            <v-row>
                <v-col>
                    <v-btn v-if="!started" v-on:click="start()">Start</v-btn>
                    <div v-else>
                        <v-btn v-if="run" v-on:click="stop()">stop</v-btn>
                        <div v-else>
                            <v-btn v-on:click="resume()">resume</v-btn>
                            <v-btn v-on:click="reset()">reset</v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-slider
                v-model="obstaclesAmount"
                @change="checkObstacles"
                :min="0"
                :max="50"
                label="Change obstacles amount"
            ></v-slider>
            <v-slider v-model="maxsteps" @change="checkSteps" :min="50" :max="500" label="Change max steps"></v-slider>
            <v-row>
                <v-col style="max-width: 150px">
                    <v-text-field
                        type="number"
                        @change="changeMutationfreq()"
                        @keyup.enter="changeMutationfreq()"
                        v-model="mutation"
                        label="mutation frequency"
                        step="0.01"
                        min="0"
                    ></v-text-field>
                </v-col>
            </v-row>
            <p>References: Code Bullet <a href="https://www.youtube.com/watch?v=BOZfhUcNiqk">Youtube video</a></p>
        </v-container>
    </div>
</template>

<script>
import Population from "../assets/js/GeneticAlgorithm/population";
import Goal from "../assets/js/GeneticAlgorithm/goal";
import Obstacles from "../assets/js/GeneticAlgorithm/obstacles";
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            popSize: 250,
            population: null,
            goal: null,
            obstaclesAmount: 5,
            maxsteps: 400,
            obstacles: null,
            run: true,
            generation: 0,
            started: false,
            mutation: 0.01,
        };
    },
    mounted() {
        this.canvas = this.$refs.canvas;
        this.ctx = this.canvas.getContext("2d");
    },
    methods: {
        stop() {
            this.run = false;
        },
        reset() {
            this.started = false;
            this.generation = 0;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        start() {
            this.run = true;
            this.started = true;
            this.generation = 1;
            this.population = new Population(this.popSize);
            this.goal = new Goal({ x: 350, y: 700 });
            this.obstacles = new Obstacles(this.obstaclesAmount);
            this.update();
        },
        resume() {
            this.run = true;
            this.update();
        },
        update() {
            if (!this.run) return;
            requestAnimationFrame(this.update);
            if (this.population.allDotsDead()) {
                this.population.calculateFitness(this.goal.getPos());
                this.population.naturalSelection();
                this.population.mutate();
                this.generation = this.population.generation;
            }
            this.population.update({ x: this.canvas.width, y: this.canvas.height }, this.goal.getPos(), this.obstacles);
            this.draw();
        },
        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.goal.draw(this.ctx);
            this.population.draw(this.ctx);
            this.obstacles.draw(this.ctx);
        },
        checkObstacles() {
            if (this.obstacles) {
                this.obstacles.addRemoveObjects(this.obstaclesAmount);
            }
        },
        checkSteps() {
            if (this.population) {
                this.population.checkSteps(this.maxsteps);
            }
        },
        changeMutationfreq(){
            if(this.population){
                this.population.changeMutationfreq(this.mutation)
            }
        }
    },
};
</script>

<style></style>
