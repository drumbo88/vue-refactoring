<template>
    <MainLayout>
        <h1>Listado de servicios</h1>
        <div>
            <button>Ver en lista</button>
            <button>Ver en tarjetas</button>
            <button>Ver en tabla</button>
        </div>
        <component :is="layout" :content="services"></component>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue';

const layout = ref(/**TODO */)
const services = ref([
    {
        name: 'Service 1',
        clients: 10,
        type: 'remote'
    },
    {
        name: 'Service 2',
        clients: 12,
        type: 'on-site'
    },
    {
        name: 'Service 3',
        clients: 3,
        type: 'remote'
    },
    {
        name: 'Service 4',
        clients: 5,
        type: 'hybrid'
    },
])
</script>