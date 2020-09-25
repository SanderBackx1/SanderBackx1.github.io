<template>
    <v-container>
        <hr class="margin-top-20" />
        <v-row class="margin-top-25" align="center" justify="center">
            <h2 class="portfolio-title">Opleidingen</h2>
        </v-row>
        <div class='d-flex justify-space-around align-center mb-6'>
            <v-list three-line max-width="500" class="margin-top-25">
                <template v-for="(study, index) in studies">
                    <div :key="index" >
                        <v-list-item>
                            <v-list-item-avatar>
                                <v-img :src="study.img"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ study.title }} - {{ study.from }}-{{ study.untill }}
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    {{ study.course }}<br />{{ study.subcourse }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider />
                    </div>
                </template>
            </v-list>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            studies: [
                {
                    title: "Thomas More Geel",
                    from: 2018,
                    untill: "heden",
                    course: "Toegepaste Informatica",
                    subcourse: "Applicatieonwikkeling & business intelligence",
                    img: "https://www.thomasmore.be/sites/www.thomasmore.be/files/tm_vignet_rgb.png",
                },
                {
                    title: "Howest Kortrijk",
                    from: 2017,
                    untill: 2018,
                    course: "Digital Art & Entertainment",
                    subcourse: "Game Development",
                    img: "https://pbs.twimg.com/profile_images/514682628163653632/nGp4CXrJ.png",
                },
            ],
        };
    },
};
</script>

<style></style>
