<template>
  <div class="main_screen">
    <!-- <p>Double count is {{ store.double }}</p> -->
    <!-- <button @click="store.increment">+</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../store/auth'

export default defineComponent({
  setup() {
    const store = useAuthStore()

    console.log(store);


    return { store }
  },

  name: 'MainScreen'
});
</script>