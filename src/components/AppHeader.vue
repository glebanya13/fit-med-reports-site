<template>
    <nav>
        <div class="nav-content">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
            </div>

            <ul class="nav-links">
                <li><router-link to="/journal" :class="$route.fullPath == '/journal' ? 'active' : ''">Дневник</router-link></li>
                <li><a href="#">Награды</a></li>
                <li><a href="#">Рекомендации</a></li>
                <li><a href="#">Тесты</a></li>
                <li><a href="#">Мои врачи</a></li>
            </ul>
            <ul class="nav-links nav-links-group">
                <li>
                    <a href="#">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/ambulance.png" alt="ambulance">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/notification.png" alt="notification">
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/chat.png" alt="chat">
                        </div>
                    </a>
                </li>
            </ul>

        </div>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppHeader',
});
</script>

<style scoped>
@import "../styles/appheader.css";
</style>