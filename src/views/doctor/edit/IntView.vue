<template>
    <div class="edit">
        <div class="edit-block">
            <div class="edit-block__registration-block">
                <div class="edit-fields">
                    <h1 class="edit-registration-block__title">Введите вопрос</h1>

                    <div class="form-field">
                        <input type="text" placeholder="">
                    </div>

                    <button class="button str-btn">
                        Закончить
                    </button>
                    <button class="button str-btn">
                        <router-link to="/reports">Вернуться</router-link>
                    </button>

                </div>
            </div>
            <div class="edit-block__logo-block">
                <div class="logo-block">
                    <h1 class="edit-registration-block__subtitle">Введите предельно допустимое значение</h1>
                    <div class="edit-fields">

                        <div class="form-field">
                            <input type="text" placeholder="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StrView',
});
</script>
  
<style scoped>
@import "../../../styles/edit.css";
</style>