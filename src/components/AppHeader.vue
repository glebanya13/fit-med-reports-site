<template>
    <nav>
        <div class="nav-content">
            <div class="logo">
                <a href="#"><img src="../assets/logo.png" alt="logo"></a>
            </div>

            <ul class="nav-links">
                <li><a href="#">Дневник</a></li>
                <li><a href="#">Награды</a></li>
                <li><a href="#">Рекомендации</a></li>
                <li><a href="#">Тесты</a></li>
                <li><a href="#">Мои врачи</a></li>
            </ul>
            <ul class="nav-links">
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
nav {
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    transition: all 0.4s ease;
}

nav .nav-content {
    height: 100%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.nav-content .nav-links {
    display: flex;
}

.nav-content .nav-links li {
    list-style: none;
    margin: 0 8px;
}

.nav-links li a {
    text-decoration: none;
    color: #00ABAA;
    font-size: 24px;
    font-weight: 500;
    padding: 10px 4px;
    transition: all 0.3 ease;
}

.nav-links li a:hover {
    color: #fecd03;
}

.nav-links-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: #FDD615;
    border-radius: 50%;
}

.nav-links-menu img {
    width: 30px;
    height: 30px;
}
</style>