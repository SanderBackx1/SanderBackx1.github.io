export default class Dot {
    constructor(pos) {
        this.pos = pos;
        this.vel = { x: 0, y: 0 };
        this.acc = { x: 0, y: 0 };
        this.brain = new Brain(400);
        this.maxSpeed = 5
        this.dead = false;
        this.fitness = 0;
        this.reachedGoal = false;
        this.isBest = false;
    }

    draw(ctx) {
        ctx.beginPath();
        if (this.isBest) {
            ctx.arc(this.pos.x, this.pos.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
        } else {
            ctx.arc(this.pos.x, this.pos.y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.strokeStyle = "blue";
        }
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    move() {
        if (this.brain.step < this.brain.directions.length - 1) {
            this.acc = this.brain.directions[this.brain.step];
            this.brain.step++;
        } else {
            this.dead = true;
        }

        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;

        if (this.vel.x > this.maxSpeed) {
            this.vel.x = this.maxSpeed;
        } else if (this.vel.x < -this.maxSpeed) {
            this.vel.x = -this.maxSpeed;
        }

        if (this.vel.y > this.maxSpeed) {
            this.vel.y = this.maxSpeed;
        } else if (this.vel.y < -this.maxSpeed) {
            this.vel.y = -this.maxSpeed;
        }

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    update(borders, goal) {
        if (!this.dead && !this.reachedGoal) {
            this.move();
            if (this.pos.x < 2 || this.pos.y < 2 || this.pos.x > borders.x || this.pos.y > borders.y) {
                this.dead = true;
            } else if (this.calcDist(this.pos.x, this.pos.y, goal.x, goal.y) < 5) {
                this.reachedGoal = true;
            }
        }
    }

    calculateFitness(goal) {
        if (this.reachedGoal) {
            this.fitness =  1 / (this.brain.step * this.brain.step ) + 0.01;
        }else{
            const distanceToGoal = this.calcDist(this.pos.x, this.pos.y, goal.x, goal.y);
            this.fitness = 1 / (distanceToGoal*distanceToGoal*distanceToGoal);
        }
    }
    calcDist(x1, y1, x2, y2) {
        const a = x1 - x2;
        const b = y1 - y2;
        return Math.sqrt(a * a + b * b);
    }

    clone(startpos) {
        const dot = new Dot(startpos, this.maxSpeed, this.maxSteps);
        dot.brain = this.brain.clone();
        return dot;
    }
    checkBrainsize(){
        if(this.brain.size>this.maxSteps){
            if(this.brain.step>this.maxSteps){
                this.dead = true;
            }
            this.brain.size = this.maxSteps
            while(this.brain.directions.length>this.maxSteps){
                this.brain.directions.pop();
            }
        }
    }
}

class Brain {
    constructor(size) {
        this.size = size;
        this.directions = [];
        this.step = 0;
        this.randomize();
    }
    randomize() {
        this.directions = [];
        for (let i = 0; i < this.size; i++) {
            let randomAngle = this.getRandomInt(Math.PI * 2);
            const vector = {
                x: Math.cos(randomAngle),
                y: Math.sin(randomAngle),
            };
            this.directions.push(vector);
        }
    }
    getRandomInt(max) {
        return Math.random() * max;
    }
    clone() {
        const clone = new Brain(this.size);
        clone.directions = [];
        this.directions.forEach((direction) => {
            clone.directions.push(direction);
        });
        return clone;
    }
    mutate() {
        const mutationrate = 0.005;
        for (let i = 0; i < this.directions.length - 1; i++) {
            const rand = Math.random();
            if (rand < mutationrate) {
                const randomAngle = this.getRandomInt(Math.PI * 2);
                const vector = {
                    x: Math.cos(randomAngle),
                    y: Math.sin(randomAngle),
                };
                this.directions[i] = vector;
            }
        }
    }
}
