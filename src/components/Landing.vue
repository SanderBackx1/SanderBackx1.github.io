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
                                <transition name="fade">
                                    <div v-if="text == 0" class="headline">Student</div>
                                </transition>
                                <transition name="fade">
                                    <div v-if="text == 2" class="headline">Coder</div>
                                </transition>
                                <transition name="fade">
                                    <div v-if="text == 4" class="headline">Muziek Producer</div>
                                </transition>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-layout>
        </v-img>
        <v-container>
            <v-layout wrap>
                <v-flex xs12>
                    <div class="display-1 font-weight-bold" id="about">Over mij</div>
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
                "In mijn vrije tijd werk ik heel graag aan applicaties en spendeer ik veel tijd aan het bijleren van nieuwe dingen. Momenteel vind ik Javascript heel interessant (o.a. Vue, NodeJS, Express,..) en zou hier graag nog veel meer van bijleren. Ook Artificiële Intelligentie vind ik enorm interessant, dit ga ik als keuze nemen in het 3e jaar IT.",
        };
    },
    mounted: function() {
        this.animate();
    },
    methods: {
        animate() {
            this.text = this.text % 6;
            const ms = this.text % 2 == 0 ? this.speed : this.buffer;

            setTimeout(() => {
                this.text++;
                this.animate();
            }, ms+100);
        },
    },
};
</script>

<style>
.subhead {
    text-align: center;
}
.fade-enter-active {
    animation: fade-in 0.5s;
}
.fade-leave-active {
    animation: fade-in 0.5s reverse;
}

@keyframes fade-in {
    0% {
        opacity: 0%;
    }
    50% {
        opacity: 50%;
    }
    100% {
        opacity: 100%;
    }
}
</style>
