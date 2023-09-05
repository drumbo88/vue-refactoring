<template>
    <MainLayout>
        <h1>Listado de servicios</h1>
        <input type="text" placeholder="Filtrar..." v-model="search" @keyup="handleSearch"/>
        <div>
            <button @click="handleLayout(ListLayout)">Ver en lista</button>
            <button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
            <button @click="handleLayout(TableLayout)">Ver en tabla</button>
        </div>
        <component :is="layout" :content="filteredServices"></component>
    </MainLayout>
</template>

<script lang="ts" setup>
import { IService } from '@/types'
import MainLayout from '@/layouts/MainLayout.vue'
import { defineAsyncComponent, onMounted, ref } from 'vue';

const ListLayout = defineAsyncComponent(() => import('@/layouts/ListLayout.vue'))
const TableLayout = defineAsyncComponent(() => import('@/layouts/TableLayout.vue'))
const CardLayout = defineAsyncComponent(() => import('@/layouts/CardLayout.vue'))
type Layout = typeof ListLayout | typeof TableLayout | typeof CardLayout

const search = ref('')
const handleSearch = () => {
    const searchLC = search.value.toLowerCase()
    filteredServices.value = services.value.filter(
        s => s.name.toLowerCase().includes(searchLC)
    )
}
const layout = ref(ListLayout)
const handleLayout = (cmp: Layout) => layout.value = cmp

const services = ref<IService[]>([])
const filteredServices = ref<IService[]>([])

onMounted(() => {
    services.value = [
        {
            name: 'Docker',
            clients: 10,
            type: 'remote'
        },{
            name: 'Vue',
            clients: 12,
            type: 'on-site'
        },{
            name: 'React',
            clients: 3,
            type: 'remote'
        },{
            name: 'Javascript',
            clients: 5,
            type: 'hybrid'
        },{
            name: 'Typescript',
            clients: 5,
            type: 'hybrid'
        },
    ]
    //filteredServices.value = services.value
    handleSearch()
})
</script>