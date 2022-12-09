<template>
  <AppHeader v-if="($route.meta.authRequired && !$route.meta.editMode)" />
  <router-view/>
  <AppFooter v-if="($route.meta.authRequired && !$route.meta.editMode)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
  components: { AppHeader, AppFooter },
});
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}
</style>
