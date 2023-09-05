<template>
    <MainLayout>
        <h1>Contact Section (coordinates: ({{ x }}, {{ y }}))</h1>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue'

import { useMouse } from '@/composables/useMouse'

const { x, y } = useMouse()
</script>