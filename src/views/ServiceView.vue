<template>
    <MainLayout>
        <h1>Listado de servicios</h1>
        <div>
            <button @click="handleLayout(ListLayout)">Ver en lista</button>
            <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
            <button @click="handleLayout(TableLayout)">Ver en tabla</button>
        </div>
        <component :is="layout" :content="services"></component>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { defineAsyncComponent, ref } from 'vue';

const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))

const layout = ref(ListLayout)
const handleLayout = cmp => layout.value = cmp
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