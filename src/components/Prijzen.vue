<template>
  <v-container>
    <v-row align="center" class="margin-top-25" justify="center">
      <h2 class="portfolio-title">Prijzen</h2>
    </v-row>
    <div class="d-flex justify-space-around align-center mb-6 margin-top-25">
      <v-list max-width="500">
        <Prijs
          v-for="(price, index) in prices"
          :key="index"
          v-bind:price="price"
        />
      </v-list>
    </div>
  </v-container>
</template>

<script>
import Prijs from "./Prijs";
export default {
  components: {
    Prijs,
  },

  data() {
    return {
      isModalVisible: false,
      prices: [
        {
          title: "Hack The Future",
          type: "Hackathon",
          year: 2019,
          price: "1st place AI NLP Challenge",
          img: "https://blogs.sap.com/wp-content/uploads/2019/11/2-14.jpg",
          moreInfo:
            "During this hackathon we wre tasked in groups of 2 to search for a password using +-10 000 emails. We had to classify the emails for their subject and afterwards extract keywords. The keywords could then be combined to create a password.",
        },
        {
          title: "Hack The Future",
          type: "Hackathon",
          year: 2020,
          price: "4th place AI NLP Challenge",
          img: "https://www.hackthefuture.be/2020/assets/images/hero/hero.webp",
          moreInfo:
            "During this hackathon we were tasked in groups of 2 to find trolls on a forum. We had to classify forum posts based on their subject and afterwards we had to do sentiment analysis to see which posts had a big amount of negative comments. These were considered trolls posts.",
        },
        {
          title: "AtOnce Hackathon",
          type: "Hackathon",
          year: 2020,
          price: "Top 5",
          img:
            "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/s960x960/75072695_2512878532276857_7428888740140941312_o.png?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=21IgxNj4Y-8AX_AejJY&_nc_ht=scontent-bru2-1.xx&oh=f645b72ef4d869080e4ef57e4295e183&oe=5EC8EE51",
          moreInfo:
            "During this hackathon we were tasked in groups of 5 to find pationt zero of an epidemic. My colleagues and I used an algorithm to backtrack an epidemic to find where this epidemic started. Thanks to this algorithm we could also predict where this epidemic is going.",
        },
      ],
    };
  },
};
</script>

<style></style>
