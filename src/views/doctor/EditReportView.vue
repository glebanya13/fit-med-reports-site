<template>
    <div class="edit">
      <div class="edit-block">
        <div class="edit-block__registration-block">
          <div class="edit-fields">
            <h1 class="edit-registration-block__title">Выберите тип вопроса</h1>
            <div class="ul">
                <div class="li">
                    <div class="image">
                        <div class="icon">
                            <img class="logo" src="../../assets/edit/select.png" alt="select" />
                        </div>
                    </div>
                    <div class="data">
                        <div class="select">С вариантами</div>
                    </div>
                </div>
                <div class="li">
                    <div class="image">
                        <div class="icon">
                            <img class="logo" src="../../assets/edit/str.png" alt="str" />
                        </div>
                    </div>
                    <div class="data">
                        <div class="select">Текстовый </div>
                    </div>
                </div>
                <div class="li">
                    <div class="image">
                        <div class="icon">
                            <img class="logo" src="../../assets/edit/int.png" alt="int" />
                        </div>
                    </div>
                    <div class="data">
                        <div class="select">Численный</div>
                    </div>
                </div>
            </div>
            <button class="button edit-btn">
                <router-link to="/reports">Вернуться</router-link>
            </button>

          </div>
        </div>
        <div class="edit-block__logo-block">
          <div class="logo-block-img">
            <img src="../../assets/edit/logo.png">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'EditReportView',
  });
  </script>
  
  <style scoped>
  @import "../../styles/edit.css";
  </style>