<template>
    <div class="visualiser">
        <v-container>
            <v-row>
                <v-col>
                    <v-btn v-on:click="initArray()">Generate new Array</v-btn>
                </v-col>
                <v-col>
                    <v-btn v-on:click="mergeSort()">Mergesort</v-btn>
                </v-col>
                <v-col>
                    <v-btn v-on:click="quickSort()">Quicksort</v-btn>
                </v-col>
                <v-col>
                    <v-btn v-on:click="heapSort()">Heapsort</v-btn>
                </v-col>
            </v-row>

            <v-slider
                v-model="volume"
                append-icon="+"
                prepend-icon="-"
                @change="checkSize"
                :min="min"
                :max="max"
                label="Increase array size"
            ></v-slider>
            <v-row>
                <v-col style="max-width: 150px">
                    <v-text-field type='number' @keyup.enter="initArray()" v-model="maxsize" label="Max item size"></v-text-field>
                </v-col>
                
                <v-col style="max-width: 150px">
                    <v-text-field type='number' @keyup.enter="initArray()" v-model="delayInMs" label="Speed in ms"></v-text-field>
                </v-col>
                
            </v-row>
            <div class="arrayContainer">
                <div
                    class="arrayItem"
                    :style="{ height: `${element}px` }"
                    v-for="(element, index) in array"
                    :key="index"
                ></div>
            </div>
        </v-container>
    </div>
</template>

<script>
import * as sorting from "../assets/js/sorting";
export default {
    data() {
        return {
            volume: 150,
            min: 30,
            max: 300,
            algorithm: 0,
            array: [],
            length: 300,
            maxsize: 750,
            delayInMs: 5,
        };
    },
    created() {
        this.initArray();
    },
    methods: {
        checkSize() {
            console.log(this.volume);
            if (this.volume > this.array.length) {
                while (this.volume > this.array.length) {
                    this.array.push(Math.round(Math.random() * this.maxsize));
                }
            } else if (this.volume < this.array.length) {
                while (this.volume < this.array.length) {
                    this.array.pop();
                }
            }
        },
        mergeSort() {
            const animations = sorting.getMergeSortAnimations(this.array);
            for (let i = 0; i < animations.length; i++) {
                const arrayItems = document.getElementsByClassName("arrayItem");
                const isColorChange = i % 3 !== 2;
                if (isColorChange) {
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayItems[barOneIdx].style;
                    const barTwoStyle = arrayItems[barTwoIdx].style;
                    const color = i % 3 === 0 ? "red" : "#aaf";
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * this.delayInMs);
                } else {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayItems[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * this.delayInMs);
                }
            }
        },
        quickSort() {
            const animations = sorting.getQuickSortAnimations(this.array);
            let comparecount = 0;
            for (let i = 0; i < animations.length; i++) {
                const arrayItems = document.getElementsByClassName("arrayItem");
                if (animations[i].pivot) {
                    const barOneIdx = animations[i].pivot;
                    const barOneStyle = arrayItems[barOneIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "green";
                    }, i * this.delayInMs);
                }
                if (animations[i].compare) {
                    const [barOneIdx, barTwoIdx] = animations[i].compare;
                    const barOneStyle = arrayItems[barOneIdx].style;
                    const barTwoStyle = arrayItems[barTwoIdx].style;
                    const color = comparecount % 2 === 0 ? "red" : "#aaf";
                    comparecount++;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * this.delayInMs);
                }
                if (animations[i].swap) {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].swap;
                        const barOneStyle = arrayItems[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * this.delayInMs);
                }
            }
        },
        heapSort() {
            const animations = sorting.getHeapSortAnimations(this.array);
            let comparecount = 0;
            for (let i = 0; i < animations.length; i++) {
                const arrayItems = document.getElementsByClassName("arrayItem");
                if (animations[i].compare) {
                    const [barOneIdx, barTwoIdx] = animations[i].compare;
                    const barOneStyle = arrayItems[barOneIdx].style;
                    const barTwoStyle = arrayItems[barTwoIdx].style;
                    const color = comparecount % 2 === 0 ? "red" : "#aaf";
                    comparecount++;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
                    }, i * this.delayInMs);
                }
                if (animations[i].swap) {
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i].swap;
                        const barOneStyle = arrayItems[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i * this.delayInMs);
                }
            }
        },
        clearArray() {
            this.array = [];
        },
        initArray() {
            this.clearArray();
            for (let i = 0; i < this.volume; i++) {
                this.array.push(Math.round(Math.random() * this.maxsize));
            }
        },
    },
};
</script>
