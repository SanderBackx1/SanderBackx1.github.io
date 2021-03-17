<template>
    <div>
        <v-img
            dark
            max-height="500px"
            src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        >
            <v-layout fill-height align-center id="header">
                <v-container>
                    <v-row align="center" justify="center" class="white--text">
                        <v-col cols="12">
                            <div class="display-2 font-weight-bold">Sander Backx</div>
                            <div style="min-height:100px">
                                <div class="headline">Student AI</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-layout>
        </v-img>
        <v-container>
            <v-layout wrap>
                <v-flex xs12>
                    <div class="display-1 font-weight-bold margin-top-25 portfolio-title" id="about">Over mij</div>
                </v-flex>
                <v-flex xs12 mt-5>
                    <div class="body-1">{{ aboutText }}</div>
                    <div class="body-1 mt-3">
                        Als ik niet aan het coderen ben, ben ik aan het producen. Ik maak muziek, niet met een
                        instrument, maar met mijn computer.
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 0,
            speed: 4000,
            buffer: 500,
            count: 0,
            aboutText:
                "I am currenty running an internship at Arinti.ai where I'm tasked to use Computer Vision to create an AI that can solve a game of Rummikub. During my spare time I love coding. Currently I'm very enthousiastic about Javascript and Typescript (NodeJS, Express, VueJs,...) and I love learning new things.",
        };
    },
};
</script>
