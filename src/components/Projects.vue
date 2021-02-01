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
            "Dit was een project voor het vak AI Projects. Hierbij konden we kiezen uit een hoop onderwerpen. Mijn collega's en ik kozen voor Selfdriving Car.",
          whatIdid:
            "Ik heb gebruik gemaakt van Fast.ai voor image regression. Onze data bestond uit een game-frame met de corresponderende controller input. Hierbij leerde we ons model aan om voor game-frames de controller input te predicten. Deze controller input stuurde we dan via een virtuele controller terug door naar de game.",
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
            "Dit was een project voor het vak Big Data. Hierbij kregen we de opdracht een image classifier te maken. We kozen voor een classifier die schilders herkent aan hun schilderijen. ",
          whatIdid:
            "Tijdens dit project heb ik samen met mijn collega een image classifier gemaakt m.b.v. fast.ai. We verkregen images via de Bing api die we vervolgens hebben opgekuist en waar we ons model mee hebben getrained. We hebben dit model ook online geplaatst. Als uitbereiding hebben we hier ook neural style transfer aan toegevoegd, deze kregen we niet online omdat het genereren van een image veel tijd in beslag neemt. ",
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
            "Bij dit project schreef ik een genetic algorithm dat van punt a naar punt b moet geraken.",
          whatIdid:
            "Ik heb gebruik gemaakt van Javascript voor het algoritme. De visualisatie gebeurde op het html canvas mbv VueJs. U kan obstakels toevoegen en verwijderen, hierdoor kan zien hoe het algoritme zichzelf aanpast.",
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
            "Dit was een klein persoonlijk project waarbij ik sorteer algoritmes heb onderzocht en heb gevisualiseert.",
          whatIdid:
            "Ik heb gebruik gemaakt van Javascript voor de algoritmes. Voor te visualiseren heb ik gebruik gemaakt van VueJS en SCSS. U kan deze interactieve visualiser op deze website bekijken.",
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
            "Dit was een project waarbij we in groep gedurende één semester een ontwerp moesten uitwerken voor een webapplicatie die het organiseren van een festival makkelijker zou maken.",
          whatIdid:
            "Tijdens dit project heb ik met mijn collega's samengewerkt om de klant haar eisen zo goed mogelijk uit te schrijven en te verwerken in een use case diagramma. Ook hebben we schermontwerpen gemaakt",
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
            "Dit was een project van het 1ste jaar Game Development in Kortrijk. Onze opdracht was een 2D game maken in C++. Dit mocht een bestaande game zijn die we namaakte, of een zelfverzonnen game",
          whatIdid:
            "Ik koos ervoor om zelf een game te verzinnen. De speler moet alle sleutels verzamelen om zo het level te kunnen verlaten. Er zijn vijanden waar de speler op kan schieten en er zijn portalen die de speler verplaatsen.",
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
