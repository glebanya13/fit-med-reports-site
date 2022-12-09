<template>
    <div class="awards" id="container">
        <div class="awards-ul">
            <div class="awards-li">
                <div class="award-container">
                    <div class="award-subcontainer">
                        <img src="../../assets/awards/bronze.png" alt="bronze">
                        <p class="award-opis">1 месяц подряд</p>
                    </div>
                </div>

                <button class="button award-btn">Последняя награда</button>

            </div>
            <div class="awards-li">
                <div class="award-container-1">
                    <div class="award-subcontainer-1">
                        <div class="award-subcontainer-title">
                            Следующие награды
                        </div>
                        <div class="award-subcontainer-data">
                            <div class="last-awards">
                                <div class="last-award">
                                    <img src="../../assets/awards/silver-1.png" alt="silver-1">
                                </div>
                                <div class="last-award">
                                    <img src="../../assets/awards/silver-2.png" alt="silver-2">
                                </div>
                                <div class="last-award">
                                    <img src="../../assets/awards/silver-3.png" alt="silver-3">
                                </div>
                                <div class="last-award">
                                    <img src="../../assets/awards/gold-1.png" alt="gold-1">
                                </div>
                                <div class="last-award">
                                    <img src="../../assets/awards/gold-1.png" alt="gold-1">
                                </div>
                                <div class="last-award">
                                    <img src="../../assets/awards/gold-1.png" alt="gold-1">
                                </div>
                            </div>
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
    name: 'AwardsView',
});
</script>
  
<style scoped>
@import "../../styles/awards.css";
</style>