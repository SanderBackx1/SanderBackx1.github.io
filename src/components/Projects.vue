<template>
    <v-container>
        <hr />
        <v-row align="center" justify="center" id="projects">
            <h2>Projecten</h2>
        </v-row>
        <v-row align="center" justify="space-around">
            <v-col v-for="(project, index) in projecten" :key="index">
                <ProjectTile v-bind:project="project" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ProjectTile from "./ProjectTile.vue";
export default {
    name: "Projects",
    components: {
        ProjectTile,
    },
    data() {
        return {
            projecten: [
                {
                    name: "Alumniavond",
                    description:
                        "Deze webapplicatie was een opdracht voor het vak PHP. Met deze applicatie kan men alumniavonden organiseren en kunnen alumni zich hiervoor inschrijven.",
                    whatIdid:
                        "Deze opdracht was in groepen van 4. Ik heb vooral gezorgd voor het implementeren van Javascript waar nodig. Ook heb ik enkele pagina's met CRUD mogelijkheden aangemaakt. Ik ben erg trots op het mailadres filtersysteem dat ik heb kunnen realiseren.",
                    technologies: [
                        {
                            name: "PHP",
                            icon: "mdi-language-php",
                        },
                        {
                            name: "Laravel",
                            icon: "mdi-laravel",
                        },
                        {
                            name: "Javascript",
                            icon: "mdi-language-javascript",
                        },
                    ],
                    link: "https://team14.sinners.be/",
                    gif: "https://i.ibb.co/BjCw169/alumniavond.gif",
                },
                {
                    name: "Ontwerpproject",
                    description:
                        "Dit was een opdracht waarbij we gedurende één week in groep moesten samenwerken om een ontwerp te maken die we hierna gingen uitwerken. Het resulaat hiervan is het PHP project - Alumniavonden.",
                    whatIdid:
                        "Tijdens dit project heb ik vooral hard nagedacht over hoe de database eruit moet zien. Mijn collega's en ik hebben hierrond een ERD schema gemaakt. Ook hebben we een UseCase diagramma gemaakt.",
                    technologies: [
                        {
                            name: "LucidChart",
                            icon: "",
                        },
                        {
                            name: "Draw.io",
                            icon: "",
                        },
                    ],
                    gif: "https://i.ibb.co/ykTpbDc/erd.jpg",
                },
                {
                    name:"The Box - Game",
                    description:"Dit was een project van het 1ste jaar Game Development in Kortrijk. Onze opdracht was een 2D game te maken in C++. Dit mocht een game namaken zijn, of een zelfverzonnen game",
                    whatIdid:"Ik had er voor gekozen om zelf een game te maken. Het doel van dit spel is om het einde in het level te halen. U moet de verschillende sleutels die verspreid zijn over het level verzamelen terwijl u uzelf verplaats via de teleportatie portalen en vijanden ontwijken of neerschieten. ",
                    technologies:[
                        {
                            name: 'C++',
                            icon: "mdi-language-cpp",
                        },                    
                    ],
                    link:'https://github.com/SanderBackx1/TheBox-Game',
                    gif:'https://i.ibb.co/k1SWrfM/game.gif',
                },
                {
                    name:"Sorting Visualiser",
                    description:"Dit was een klein persoonlijk project waarbij ik sorteer algoritmes heb onderzocht en heb gevisualiseert.",
                    whatIdid:"Ik heb gebruik gemaakt van Javascript voor de algoritmes. Voor te visualiseren heb ik gebruik gemaakt van VueJS en SCSS. U kan deze interactieve visualiser op deze website bekijken.",
                    technologies:[
                        {
                            name: 'VueJs',
                            icon: "mdi-vuejs",
                        },
                        {   
                            name: 'Javascript',
                            icon: "mdi-language-javascript",
                        }
                    ],
                    route:'visualiser',
                    gif:'https://i.ibb.co/wQJdSCW/visualiser.gif',
                }
            ],
        };
    },
};
</script>

<style></style>
