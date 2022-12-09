<template>
    <main class="main">
        <div class="client">
            <div class="client__container">
                <div class="client__inner">
                    <div class="client__photo">
                        <img src="../../assets/doctors/man.png" alt="man">
                    </div>
                    <div class="client__content">
                        <div class="client__content-top">
                            <div class="client__content-title">Lorem ipsum dolor
                            </div>
                            <div class="client__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed vitae efficitur nunc, a auctor est. Sed tortor ipsum, sollicitudin ac eros eu,
                                volutpat tristique risus. Integer et est sed nisi efficitur scelerisque in fermentum
                                metus.
                            </div>
                        </div>
                        <div class="client__content-block">
                            <div class="client__content-item">Написать</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="client__title">Привязаться к другим врачам</div>
            <div class="client__container">
                <div class="client__inner">
                    <div class="client__photo">
                        <img src="../../assets/doctors/woman.png" alt="woman">
                    </div>
                    <div class="client__content">
                        <div class="client__content-top">
                            <div class="client__content-title">Lorem ipsum dolor
                            </div>
                            <div class="client__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed vitae efficitur nunc, a auctor est. Sed tortor ipsum, sollicitudin ac eros eu,
                                volutpat tristique risus. Integer et est sed nisi efficitur scelerisque in fermentum
                                metus.
                            </div>
                        </div>
                        <div class="client__content-block">
                            <div class="client__content-item">Привязаться</div>
                            <div class="client__content-item">Написать</div>
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
    name: 'MyDoctorsView',
});
</script>
  
<style scoped>
@import "../../styles/doctors.css";
</style>