<template>
    <div>
        <v-card color="transparent" class="project-card" width="350px" min-height="450px">
            <v-card-title>
                <v-flex>
                    <h2 class="project-title">{{ project.name }}</h2>
                </v-flex>
            </v-card-title>
            <v-card-text>
                <div class='projectTextBox'>
                <div class='projectText'>{{ project.description }}</div>
                <div  class='projectText'>{{ project.whatIdid }}</div>
                </div>
                <hr  />
                <div class="margin-top-15">Gebruikte technologieën</div>
                <v-layout>
                    <template v-for="(tech, i) in project.technologies">
                        <v-flex xs3 :key="i">
                            <div class="text-center projectText margin-top-10">
                                <v-btn icon>
                                    <v-icon>{{ tech.icon }}</v-icon>
                                </v-btn>
                                <div class="caption">{{ tech.name }}</div>
                            </div>
                        </v-flex>
                    </template>
                </v-layout>
                <div v-if="project.gif">
                    <modal v-show="isModalVisible"  v-bind:project="project" @close="closeModal" />
                    <v-btn @click="isModalVisible=true" class="margin-bottom-10">Bekijken</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import Modal from "./Modal";
export default {
    name: "Project",
    components: {
        Modal,
    },
    props: {
        project: {
            type: Object,
        },
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods:{
      closeModal(){
        this.isModalVisible=false;
      }
    }
};
</script>

<style></style>
