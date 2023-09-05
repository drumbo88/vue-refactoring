<template>
    <div class="list">
        <h3>{{ content.name }}</h3>
        <p>{{ content.clients }}</p>
        <p>{{ content.type }}</p>
    </div>
</template>

<script lang="ts" setup>
    defineProps(['content'])
</script>

<style scoped>
.list {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    width: 100%;
    margin: 10px;
    justify-content: space-around;
}
</style>