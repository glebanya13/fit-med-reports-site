<template>
    <div class="modal" id="modal">
        <div class="modal__content">
            <h1 class="modal__h1">Экстренная кнопка</h1>
            <p class="modal__p">Кому позвонить в экстренной ситуации?</p>
            <form action="#" class="modal__form">
                <input type="text" placeholder="Имя">
                <input type="text" placeholder="Отчество">
                <input type="tel" placeholder="Телефон">
            </form>
            <p class="modal__or">Или</p>
            <button class="modal__button">Позвонить в скорую</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AmbulanceModal',
});
</script>

<style scoped>
@import "../styles/modal.css";
</style>