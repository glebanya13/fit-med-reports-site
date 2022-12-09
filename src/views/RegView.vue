<template>
    <div class="auth">
        <div class="main-block">
            <div class="main-block__registration-block">
                <div class="form-fields">
                    <h1 class="registration-block__title">РЕГИСТРАЦИЯ</h1>
                    <div class="form-field wrap-login">
                        <input v-model="name" type="text" placeholder="Имя">
                    </div>
                    <div class="form-field wrap-password">
                        <input v-model="password" type="password" placeholder="Пароль">
                    </div>
                    <div class="form-checkbox">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me">Запомнить меня</label>
                    </div>
                    <div class="form-buttons">
                        <button class="button" @click="store.register(name, password)">Войти</button>
                    </div>
                    <div class="form-link">
                        <router-link to="/login" class="link">Имеете аккаунт? Войти</router-link>
                    </div>
                </div>
            </div>
            <div class="main-block__logo-block">
                <div class="logo-block-img">
                    <img src="../assets/auth/logo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../store/auth'

export default defineComponent({
    setup() {
        const store = useAuthStore()

        return { store }
    },

    data() {
        return {
            name: "",
            password: "",
        }
    },
    name: 'RegView',
});
</script>

<style scoped>
@import "../styles/auth.css";
</style>