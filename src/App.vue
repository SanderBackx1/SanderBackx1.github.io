<template>
    <v-app>
        <v-app-bar class="appbar" app dark>
            <div class="row">
                <div class="col-10">
                    <router-link to="/">
                        <p @click="$vuetify.goTo('#header')">Sander Backx</p>
                    </router-link>
                </div>
                <div class="col-1 text-center">
                    <router-link to="/">
                        <v-btn icon>
                            <p @click="$vuetify.goTo('#projects')">Projecten</p>
                        </v-btn></router-link
                    >
                </div>
                <div class="col-1 text-center">
                    <router-link to="/">
                        <v-btn icon>
                            <v-icon @click="$vuetify.goTo('#header')">mdi-home</v-icon>
                        </v-btn></router-link
                    >
                </div>
            </div>
        </v-app-bar>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
    name: "App",

    components: {
        Footer,
    },

};
</script>
