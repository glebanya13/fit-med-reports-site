<template>
    <main class="main">
        <div class="intro">
            <div class="intro__container">
                <div class="intro__content">
                    <div class="intro__left">
                        <div class="intro__suptitle">Тэги: [Lorem] [ipsum] [dolor]</div>
                        <div class="intro__title">Добавьте активность
                            в вашу жизнь</div>
                        <div class="intro__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                            efficitur nunc, a auctor est. Sed tortor ipsum, sollicitudin ac eros eu, volutpat tristique
                            risus. Integer et est sed nisi efficitur scelerisque in fermentum metus. Nullam sagittis et
                            massa eu laoreet. Aliquam egestas porta ligula, cursus tempor enim tempus ut. Duis at orci
                            ac nunc dignissim imperdiet. Etiam sollicitudin tincidunt tortor, eleifend tempus mi
                            faucibus at. Aenean urna nisl, lacinia nec orci eu, rutrum vulputate nunc. Fusce bibendum
                            laoreet vestibulum. Aliquam ut blandit sem, vel fermentum magna. </div>
                    </div>
                    <div class="intro__right">
                        <div class="intro__photo">
                            <img src="../../assets/recommendations/wallpaper.png" alt="wallpaper">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="info__title">Врачи, которые могут помочь</div>
            <div class="info__inner">
                <div class="info__col">
                    <div class="info__item">
                        <div class="info__photo">
                            <img src="../../assets/recommendations/person.png" alt="person">
                        </div>
                        <div class="info__content">
                            <div class="info__content-title">Lorem ipsum dolor</div>
                            <div class="info__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info__col">
                    <div class="info__item">
                        <div class="info__photo">
                            <img src="../../assets/recommendations/person.png" alt="person">
                        </div>
                        <div class="info__content">
                            <div class="info__content-title">Lorem ipsum dolor</div>
                            <div class="info__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info__col">
                    <div class="info__item">
                        <div class="info__photo">
                            <img src="../../assets/recommendations/person.png" alt="person">
                        </div>
                        <div class="info__content">
                            <div class="info__content-title">Lorem ipsum dolor</div>
                            <div class="info__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RecommendationsView',
});
</script>
  
<style scoped>
@import "../../styles/recommendations";
</style>