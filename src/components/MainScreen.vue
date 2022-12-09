<template>
  <div class="main_screen">
    <p>Double count is {{ store.double }}</p>
    <button @click="store.increment">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '../store'

export default defineComponent({
  setup() {
    const store = useCounterStore()

    console.log(store);


    return { store }
  },

  name: 'MainScreen'
});
</script>