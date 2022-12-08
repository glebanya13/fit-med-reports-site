<template>
  <div class="home">
    <img class="home-image" src="../../assets/home/home.png" alt="">

    <button type="button" class='btn home-btn'>Пройти тестирование</button>

    <p class="home-opis">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae efficitur nunc, a auctor est. Sed tortor ipsum,
      sollicitudin ac eros eu, volutpat tristique risus. Integer et est sed nisi efficitur scelerisque in fermentum
      metus.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>
@import "../../styles/home.css";
</style>