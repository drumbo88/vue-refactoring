<template>
    <h1>Componente Tarjeta</h1>
    <div class="container">
        <ServiceCard v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import ServiceCard from '@/components/Data/ServiceCard.vue'
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