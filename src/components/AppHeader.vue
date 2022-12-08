<template>
    <nav>
        <div class="nav-content">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
            </div>

            <ul class="nav-links">
                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.path"
                        :class="$route.fullPath == link.path ? 'active' : ''">{{ link.title }}</router-link>
                </li>
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
                    <a href="#" @click="modal = !modal">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/notification.png" alt="notification">
                            <div class="notification"></div>
                        </div>
                    </a>
                    <div class="nav-menu" v-show="modal">
                        <div class="ul">
                            <div class="li">
                                <div class="image">
                                    <img class="logo" src=".././assets/appheader/person.png" alt="person" />
                                </div>
                                <div class="data">
                                    <span class="name">Lorem ipsum dolor</span>
                                    <div class="opis">не забудьте принять таблетки</div>
                                </div>
                            </div>
                            <div class="li">
                                <div class="image">
                                    <img class="logo" src=".././assets/appheader/person.png" alt="person" />
                                </div>
                                <div class="data">
                                    <span class="name">Lorem ipsum dolor</span>
                                    <div class="opis">не забудьте принять таблетки</div>
                                </div>
                            </div>
                            <div class="li">
                                <div class="image">
                                    <img class="logo" src=".././assets/appheader/person.png" alt="person" />
                                </div>
                                <div class="data">
                                    <span class="name">Lorem ipsum dolor</span>
                                    <div class="opis">не забудьте принять таблетки</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/chat.png" alt="chat">
                            <div class="notification"></div>
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
    data() {
        return {
            modal: false,
            links: [
                { title: "Дневник", path: "/journal" },
                { title: "Награды", path: "/awards" },
                { title: "Рекомендации", path: "/recommendations" },
                { title: "Тесты", path: "/reports" },
                { title: "Мои врачи", path: "/doctors" },
            ],
        }
    }
});
</script>

<style scoped>
@import "../styles/appheader.css";
</style>