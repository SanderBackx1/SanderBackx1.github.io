<template>
    <div class="margin-top-15">
        <v-list-item>
            <v-list-item-avatar>
                <v-img :src="price.img"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title> {{ price.title }} - {{ price.year }} </v-list-item-title>
                <v-list-item-subtitle>
                    {{ price.price }}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn icon>
                    <v-icon @click="isModalVisible = !isModalVisible" color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                <div v-if="price.moreInfo">
                    <ModalInfo v-show="isModalVisible" v-bind:price="price" @close="closeModal" />
                </div>
            </v-list-item-action>
        </v-list-item>
        <v-divider class="margin-top-15" />
    </div>
</template>

<script>
import ModalInfo from "./ModalInfo";
export default {
    components: {
        ModalInfo,
    },
    props: {
        price: {
            type: Object,
        },
    },

    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        closeModal() {
            this.isModalVisible = false;
        },
    },
};
</script>

<style></style>
