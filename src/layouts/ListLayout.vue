<template>
    <h1>Componente Lista</h1>
    <div class="container">
        <ServiceList v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import ServiceList from '@/components/Data/ServiceList.vue'
const props = defineProps(['content'])

</script>

<style scoped>
.container {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
</style>