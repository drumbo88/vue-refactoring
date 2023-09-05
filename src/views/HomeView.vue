<template>
    <MainLayout>
        <h1>My Home Content</h1>
        <template #aux>
            <h1>Aux content</h1>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>