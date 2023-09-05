<template>
    <div class="card">
        <h3>{{ content.name }}</h3>
        <p>{{ content.clients }}</p>
        <p>{{ content.type }}</p>
    </div>
</template>

<script lang="ts" setup>
    defineProps(['content'])
</script>

<style scoped>
.card {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 10px;
}
</style>