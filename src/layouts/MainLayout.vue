<template>
    <div class="container">
        <div class="auxbar">
            <AuxBar />
        </div>
        <div class="main-content-container">
            <div class="menu">
                <MenuSidebar />
            </div>
            <div class="main-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MenuSidebar from '@/components/MenuSidebar.vue'
import AuxBar from '@/components/AuxBar.vue'
</script>