<template>
    <nav>
        <div class="nav-content">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.png" alt="logo"></router-link>
            </div>

            <ul class="nav-links">
                <li v-for="link in links" :key="link.title">
                    <router-link @click="(dialog = false, modal = false)" :to="link.path"
                        :class="$route.fullPath == link.path ? 'active' : ''">{{ link.title
                        }}</router-link>
                </li>
            </ul>
            <ul class="nav-links nav-links-group">
                <li>
                    <a href="#" @click="show">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/ambulance.png" alt="ambulance">
                        </div>
                    </a>
                    <AmbulanceModalVue v-show="dialog" />
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
                    <router-link to="/chat" @click="(dialog = false, modal = false)">
                        <div class="nav-links-menu">
                            <img src="../assets/appheader/chat.png" alt="chat">
                            <div class="notification"></div>
                        </div>
                    </router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import AmbulanceModalVue from './AmbulanceModal.vue';

export default defineComponent({
    name: 'AppHeader',
    components: { AmbulanceModalVue },
    data() {
        return {
            modal: false,
            dialog: false,
            links: [
                // { title: "Дневник", path: "/journal" },
                { title: "Награды", path: "/awards" },
                { title: "Рекомендации", path: "/recommendations" },
                { title: "Тесты", path: "/tests" },
                { title: "Создание теста", path: "/reports" },
                { title: "Мои врачи", path: "/doctors" },
            ],
        }
    },
    methods: {
        show() {
            if (!this.modal) {
                this.dialog = !this.dialog;

                let container = document.getElementById('container');

                if (this.dialog) {
                    if (container) {
                        container.style.opacity = "0.1";
                    }
                } else {
                    if (container) {
                        container.style.opacity = "1";
                    }
                }

            }
        }
    }
});
</script>

<style scoped>
@import "../styles/appheader.css";
</style>