<template>
    <v-container>
        <v-row align="center" class="margin-top-25" justify="center">
            <h2 class="portfolio-title">Prijzen</h2>
        </v-row>
        <div class="d-flex justify-space-around align-center mb-6 margin-top-25">
            <v-list max-width="500">
                    <Prijs v-for="(price, index) in prices" :key="index" v-bind:price="price" />
            </v-list>
        </div>
    </v-container>
</template>

<script>

import Prijs from "./Prijs";
export default {
    components: {
        Prijs
    },

    data() {
        return {
            isModalVisible: false,
            prices: [
                {
                    title: "Hack The Future",
                    type: "Hackathon",
                    year: 2019,
                    price: "1ste plaats AI NLP Challenge",
                    img: "https://blogs.sap.com/wp-content/uploads/2019/11/2-14.jpg",
                    moreInfo: "Bij deze hackathon was de opdracht om in een groep van 2 een wachtwoord te kraken m.b.v. +-10 000 emails en een aantal vorige wachtwoorden. Samen met mijn collega Remco Goyvaerts hebben wij de mails opgesplitst in train en test data. Vervolgens hebben we een classifier geschreven die de mail opdeelde in de verschillende categorieën die voorkwamen in de vorige wachtwoorden. Hierna hebben we kernwoorden uitgezocht en hebben we hier het nieuwe wachtwoord mee proberen te kraken.",
                },
                {
                    title: "AtOnce Hackathon 2020",
                    type: "Hackathon",
                    year: 2020,
                    price: "Top 5",
                    img:
                        "https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/s960x960/75072695_2512878532276857_7428888740140941312_o.png?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=21IgxNj4Y-8AX_AejJY&_nc_ht=scontent-bru2-1.xx&oh=f645b72ef4d869080e4ef57e4295e183&oe=5EC8EE51",
                    moreInfo: "Bij deze hackathon was de opdracht om in een groep van 5 patient zero te vinden van een epidemie. Mijn collega's en ik hebben er voor gekozen m.b.v. een algoritme en de vroegere nummers te kunnen voorspellen waar de epidemie vandaan komt en waar hij naartoe gaat.",
                },
            ],
        };
    },

};
</script>

<style></style>
