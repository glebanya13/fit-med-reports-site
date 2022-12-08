<template>
    <div class="auth">
        <div class="main-block">
            <div class="main-block__registration-block">
                <div class="form-fields">
                    <h1 class="registration-block__title">РЕГИСТРАЦИЯ</h1>
                    <div class="form-field wrap-login">
                        <input type="text" placeholder="Имя">
                    </div>
                    <div class="form-field wrap-password">
                        <input type="password" placeholder="Пароль">
                    </div>
                    <div class="form-checkbox">
                        <input type="checkbox" id="remember-me">
                        <label for="remember-me">Запомнить меня</label>
                    </div>
                    <div class="form-buttons">
                        <button class="button">Войти</button>
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

<style scoped>
@import "../styles/auth.css";
</style>