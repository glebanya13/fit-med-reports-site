<template>
    <div class="journal">
        <HelloWorld />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../../components/MainScreen.vue'

export default defineComponent({
    name: 'JournalView',
    components: { HelloWorld }
});
</script>