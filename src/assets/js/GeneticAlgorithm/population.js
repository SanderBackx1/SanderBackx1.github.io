import Dot from "./dot.js";
export default class Population {
    constructor(size) {
        this.size = size;
        this.dots = [];
        this.fillPopulation();
        this.generation = 1;
        this.bestDot = 0;

    }
    fillPopulation() {
        this.dots = [];
        console.log('speed ',this.speed);
        for (let i = 0; i < this.size; i++) {
            const newDot = new Dot({ x: 350, y: 100 });
            this.dots.push(newDot);
        }
    }

    update(border, goal, obstacle) {
        this.dots.forEach((dot) => {
            obstacle.checkCollision(dot);
            dot.update(border, goal);
        });
    }
    draw(ctx) {
        this.dots.forEach((dot) => {
            dot.draw(ctx);
        });
    }
    calculateFitness(goal) {
        this.dots.forEach((dot) => {
            dot.calculateFitness(goal);
        });
    }
    allDotsDead() {
        for (let i = 0; i < this.dots.length - 1; i++) {
            if (!this.dots[i].dead && !this.dots[i].reachedGoal) {
                return false;
            }
        }
        return true;
    }

    calcaulateTotalFitnes() {
        let totalFitness = 0;
        for (let i = 0; i < this.dots.length - 1; i++) {
            totalFitness += this.dots[i].fitness;
        }
        return totalFitness;
    }
    naturalSelection() {
        const newDots = [];
        const newSize = this.size;
        const total = this.calcaulateTotalFitnes();
        this.setBestDot();
        newDots.push(this.dots[this.bestDot].clone({ x: 350, y: 100 }));
        newDots[0].isBest = true;
        for (let i = 0; i < newSize; i++) {
            const parent = this.selectParent(total);
            newDots.push(parent.clone({ x: 350, y: 100 }));
        }

        this.dots = newDots;
        this.generation++;
    }
    selectParent(total) {
        const rand = Math.random() * total;
        let runningSum = 0;
        for (let i = 0; i < this.dots.length - 1; i++) {
            runningSum += this.dots[i].fitness;
            if (runningSum > rand) {
                return this.dots[i];
            }
        }
    }
    mutate() {
        this.dots.forEach((dot) => {
            if (!dot.isBest) {
                dot.brain.mutate();
            }
        });
    }
    setBestDot() {
        let max = 0;
        let maxidx = 0;
        for (let i = 0; i < this.dots.length - 1; i++) {
            if (this.dots[i].fitness > max) {
                max = this.dots[i].fitness;
                maxidx = i;
            }
        }
        this.bestDot = maxidx;
    }

}
