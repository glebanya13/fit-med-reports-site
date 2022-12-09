<template>
    <div class="reports">
        <div class="containers" v-for="item in items" :key="item.id">
            <div class="form-border">
                <div class="form-ques">
                    <div class="form-ques-fields">
                        <div class="form-ques-field">
                            <input type="text" placeholder="Lorem ipsum dolor?">
                        </div>
                        <div class="form-ques-field answer-field">
                            <input type="text" placeholder="4 варианта">
                        </div>
                    </div>
                </div>
            </div>
            <div class="icons">
                <div class="icon">
                    <img src="../../assets/reports/trash.png" alt="trash">
                </div>
                <div class="icon">
                    <router-link to="/edit-report">
                        <img src="../../assets/reports/edit.png" alt="edit">
                    </router-link>
                </div>
                <div class="icon" v-if="item.id == items.length">
                    <img src="../../assets/reports/plus.png" alt="plus">
                </div>
            </div>
        </div>

        <div class="containers">
            <div class="form-border form-repeat-border">
                <div class="form-ques">
                    <div class="form-ques-fields">
                        <div class="form-ques-field">
                            <input type="text" placeholder="Повторять в день n раз">
                        </div>
                        <div class="form-ques-field answer-field">
                            <input type="text" placeholder="Повторять в неделю n раз">
                        </div>
                    </div>
                    <div class="form-ques-fields tag-fields">
                        <div class="form-ques-field">
                            <input type="text" placeholder="Тэги">
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
    name: 'ReportsView',
    data() {
        return {
            items: [
                { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
            ]
        }
    }
});
</script>
  
<style scoped>
@import "../../styles/reports.css";
</style>