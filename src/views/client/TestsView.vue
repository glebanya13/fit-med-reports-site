<template>
    <div class="tests">
        <div class="test">
            <img class="test-image" src="../../assets/tests/test.png" alt="test">
            <div class="notes">
                <div class="note">
                    <div class="image">
                        <img class="logo" src="../../assets/tests/clock.png" alt="clock" />
                    </div>
                    <div class="data">
                        <span class="name">тесты занимают менее 15 минут</span>
                    </div>
                </div>
                <div class="note">
                    <div class="image">
                        <img class="logo" src="../../assets/tests/scales.png" alt="clock" />
                    </div>
                    <div class="data">
                        <span class="name">отвечате честно для лучшего результата</span>
                    </div>
                </div>
                <div class="note">
                    <div class="image">
                        <img class="logo" src="../../assets/tests/radical.png" alt="clock" />
                    </div>
                    <div class="data">
                        <span class="name">постарайтесь не давать нейтральных ответов</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="test-ul">
            <div class="test-br">
            </div>
            <div class="test-li">
                <div class="image">
                    <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                </div>
                <div class="data">
                    <span class="name">Lorem ipsum dolor</span>
                    <div class="opis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
            </div>
            <div class="test-br">
            </div>
            <div class="test-li">
                <div class="image">
                    <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                </div>
                <div class="data">
                    <span class="name">Lorem ipsum dolor</span>
                    <div class="opis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
            </div>
            <div class="test-br"></div>
            <div class="test-li">
                <div class="image">
                    <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                </div>
                <div class="data">
                    <span class="name">Lorem ipsum dolor</span>
                    <div class="opis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
            </div>
            <div class="test-br"></div>
            <div class="test-li">
                <div class="image">
                    <img class="logo" src="../../assets/appheader/person.png" alt="person" />
                </div>
                <div class="data">
                    <span class="name">Lorem ipsum dolor</span>
                    <div class="opis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                </div>
            </div>
            <div class="test-br"></div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TestsView',
});
</script>
  
<style scoped>
@import "../../styles/test.css";
</style>