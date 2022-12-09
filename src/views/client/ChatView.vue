<template>
    <div class="chat" id="container">
        <div class="chat-block">
            <div class="chat-list-block">
                <div class="chat-list-search">
                    <div class="search-field">
                        <img src="../../assets/chat/search.png" alt="search">
                        <input type="text" placeholder="Поиск">
                    </div>
                </div>
                <div class="ul">
                    <div class="li chat-li">
                        <div class="image">
                            <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                        </div>
                        <div class="data">
                            <span class="name">Lorem ipsum dolor</span>
                            <div class="opis">не забудьте принять таблетки</div>
                        </div>
                    </div>

                    <div class="li chat-li">
                        <div class="image">
                            <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                        </div>
                        <div class="data">
                            <span class="name">Lorem ipsum dolor</span>
                            <div class="opis">не забудьте принять таблетки</div>
                        </div>
                    </div>

                    <div class="li chat-li">
                        <div class="image">
                            <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                        </div>
                        <div class="data">
                            <span class="name">Lorem ipsum dolor</span>
                            <div class="opis">не забудьте принять таблетки</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-input-block">
                <div class="chat-input-name-block">
                    <div class="image">
                        <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                    </div>
                    <div class="data">
                        <span class="name">Lorem ipsum dolor</span>
                    </div>
                </div>

                <div class="chat-input-text">
                    <div class="input-field">
                        <input type="text" placeholder="Напишите что-нибудь">
                    </div>
                    <div class="icons">
                        <img class="icon-next" src="../../assets/chat/next.png" alt="next">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatView',
});
</script>
  
<style scoped>
@import "../../styles/chat.css";
</style>