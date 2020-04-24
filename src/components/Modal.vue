<script>
export default {
    name: "modal",
    props: {
        project: {
            type: Object,
        },
    },
    methods: {
        close() {
            this.$emit("close");
        },
    },
};
</script>

<template>
    <div class="modal-backdrop" style="z-index:999">
        <v-card class="modal">
            <v-card-title class="modal-header">
                <slot name="header">
                    {{ project.name }}
                    <button type="button" class="btn-close" @click="close">
                        x
                    </button>
                </slot>
            </v-card-title>
            <v-card-text>
                <v-img lazy-src="../assets/placeholder-image.jpg" max-height="500" contain :src="project.gif" />
                <footer class="modal-footer">
                    <slot name="footer">
                        <v-btn v-if="project.link" type="button" :href="project.link" target="_blank">
                            Surf naar project
                        </v-btn>

                        <router-link v-if="project.route" :to="project.route">
                            <v-btn type="button">
                                Surf naar project
                            </v-btn>
                        </router-link>
                    </slot>
                </footer>
            </v-card-text>
        </v-card>
    </div>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}
</style>
