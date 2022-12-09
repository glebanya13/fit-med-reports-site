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
            <div class="edit-block__logo-block" v-if="(items.length == 2)">
                <div class="edit-blocks" v-for="item in items" :key="item.id">
                    <div class="edit-block__banner">
                        <div class="edit-fields">
                            <div class="form-field">
                                <input type="text" v-model="item.title" placeholder="Введите вариант">
                            </div>
                        </div>

                        <div class="icons">
                            <div class="icon">
                                <img src="../../../assets/edit/close.png" alt="close">
                            </div>
                            <div class="icon">
                                <img src="../../../assets/edit/success.png" alt="success">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="edit-block__logo-block-1" v-if="(items.length > 2)">
                <div class="edit-blocks" v-for="item in items" :key="item.id">
                    <div class="edit-block__banner-1">
                        <div class="edit-fields">
                            <div class="form-field">
                                <input type="text" v-model="item.title" placeholder="Введите вариант">
                            </div>
                        </div>

                        <div class="icons">
                            <div class="icon" @click="destroy(item.id)">
                                <img src="../../../assets/edit/close.png" alt="close">
                            </div>
                            <div class="icon">
                                <img src="../../../assets/edit/success.png" alt="success">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="edit-block_plus" @click="add">
                <img src="../../../assets/edit/plus.png" alt="close">
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StrView',
    data() {
        return {
            items: [
                { id: 0, title: '' }, { id: 1, title: '' }
            ]
        }
    },
    methods: {
        add() {
            if (this.items.length < 4) {
                this.items.push({
                    id: this.items.length - 1,
                    title: ''
                });
            }
            return;
        },
        destroy(id: number) {
            console.log(id);

            let index = this.items.findIndex(i => i.id == id);

            if (this.items.length > 2) {
                this.items.splice(index, 1);
            }

            return;
        }
    }
});
</script>
  
<style scoped>
@import "../../../styles/edit.css";
</style>