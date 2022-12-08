<template>
  <div class="container">
    <img class="home-image" src="../../assets/home/home.png" alt="">

    <button type="button" class='btn home-btn'>Пройти тестирование</button>

    <p class="home-opis">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae efficitur nunc, a auctor est. Sed tortor ipsum, sollicitudin ac eros eu, volutpat tristique risus. Integer et est sed nisi efficitur scelerisque in fermentum metus.
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container .home-image {
  width: 100%;
}

.btn {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  min-width: 4.25rem;
  min-height: 4.25rem;
  border-radius: 9999px;
  border: none;
  background: #FDD615;
  color: #000000;
  cursor: pointer;
  padding-left: 3rem;
  padding-right: 3rem;
}

.home-btn {
  margin-top: 72px;
}

.home-opis {
  margin-top: 22px;
  margin-bottom: 174px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  max-width: 560px;
}
</style>