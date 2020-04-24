

<template>
  <div class="modal-backdrop" style="z-index:999;">
    <v-card class="modal" style=" max-width:500px">
          
      <v-card-title class="modal-header">
        <slot name="header">
          {{price.title}}
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </v-card-title>
      <v-card-text>
      <div>
        {{price.moreInfo}}
      </div>
       <footer class="modal-footer">
      </footer>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'modal',
    props: {
        price: {
            type: Object,
        },
    },
    methods: {
      close() {
        this.$emit('close');
      },
      
    },
  };
</script>
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
    background: #FFFFFF;
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
    color: #4AAE9B;
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
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>