<template>
  <v-container>
    <hr class="margin-top-20" />
    <v-row class="margin-top-25" align="center" justify="center" id="projects">
      <h2 class="portfolio-title margin-bottom-25">Projecten</h2>
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
          name: "Selfdriving Car",
          description:
            "This was a project for my course AI Projects. We had the opportunity to choose between different subjects and my colleagues and I chose to try to create a selfdriving car.",
          whatIdid:
            "I used Fast.ai image regression. Our data existed of game-frames with corresponding controller input which we recorded while driving around. This data we used to teach our model to give controller input when handed a game frame. This result we then gave to a virtual controller which controlled the game.",
          technologies: [
            {
              name: "Fast.ai",
            },
            {
              name: "Python",
              icon: "mdi-language-python",
            },
          ],
          route: "selfdriving",
          gif:
            "https://media.giphy.com/media/bVmpW12b6Ml0ZjDIAt/giphy-downsized.gif",
        },

        {
          name: "Bot ross",
          description:
            "This was a project for my course Big Data. We were tasked to create an image classifier. We chose to classify paintings and painters.",
          whatIdid:
            "During this project I worked together with my colleague to create an image classifier using Fast.ai. We used Bing api to retreive images from the web which we used for training. Given an image, our model predicts which painter painted the image. As an extension we added NST that combines an image and a painting style to create a new image. Sadly, this process takes to long to do on the web.",
          technologies: [
            {
              name: "Fast.ai",
              icon: "",
            },
            {
              name: "Python",
              icon: "mdi-language-python",
            },
          ],
          link:"http://128.199.63.207:5000/",
          gif: "https://media.giphy.com/media/Zs8Xt9A4WQlO16Yrqi/giphy.gif",
        },
        {
          name: "Genetic Algorithm",
          description:
            "A small project where I wrote a genetic algorithm that tasks an object to go from point a to b.",
          whatIdid:
            "I used Javascript for the algorithm. The visualisation is created with HTML canvas and VueJs. You can add and remove obstacles to see the change in behaviour of the algorithm.",
          technologies: [
            {
              name: "VueJs",
              icon: "mdi-vuejs",
            },
            { name: "Javascript", icon: "mdi-language-javascript" },
          ],
          route: "genalgo",
          gif: "https://i.ibb.co/5R21MLC/genalgo.gif",
        },

        {
          name: "Sorting Visualiser",
          description:
            "A small project where I visualised multiple search alogirthms.",
          whatIdid:
            "I used Javascript for the algorithms. I used VueJs and SCSS to visualise the algorithms.",
          technologies: [
            {
              name: "VueJs",
              icon: "mdi-vuejs",
            },
            {
              name: "Javascript",
              icon: "mdi-language-javascript",
            },
          ],
          route: "visualiser",
          gif: "https://i.ibb.co/wQJdSCW/visualiser.gif",
        },
        {
          name: "Alumniavond",
          description:
            "This webapplication was a task for the course PHP. This application is used to organise an event where users can sign up for.",
          whatIdid:
            "I mainly worked on the implementation of Javascript where needed. I also made some CRUD's. The part I am most proud of is the filterable mail system. Users can be asked questions through a form and can afterwards be filtered out thanks to these questions. ",
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
            "This was a project where we had to plan out an application used to organise music festivals.",
          whatIdid:
            "During this project my colleagues and I created UseCase diagrams and screen mockups alongside feedback from a customer.",
          technologies: [
            {
              name: "Axure",
              icon: "",
            },
            {
              name: "Draw.io",
              icon: "",
            },
          ],
          gif: "https://i.ibb.co/wpnXdzh/Capture.jpg",
        },
        {
          name: "The Box - Game",
          description:
            "A project I made during my first year Game Development in Kortrijk. We were tasked to create of remake a 2D game in C++. I decided to create a new game.",
          whatIdid:
            "The player has to retreive all the keys hidden in the level. There are enemies that shoot projectiles and portals that can teleport the player.",
          technologies: [
            {
              name: "C++",
              icon: "mdi-language-cpp",
            },
          ],
          link: "https://github.com/SanderBackx1/TheBox-Game",
          gif: "https://i.ibb.co/k1SWrfM/game.gif",
        },
      ],
    };
  },
};
</script>

<style></style>
