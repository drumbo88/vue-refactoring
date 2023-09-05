<template>
    <MainLayout>
        <h1>My Home Content</h1>
        <template #aux>
            <h1>X position is {{ x }}, Y position is: {{ y }}</h1>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
import { useMouse } from '@/composables/useMouse'

const { x, y } = useMouse()
</script>