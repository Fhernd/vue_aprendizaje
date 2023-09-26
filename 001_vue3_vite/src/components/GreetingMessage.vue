<script setup lang="ts">

defineProps<{ username: string }>()

</script>

<template>
    <span>My name is {{ username }}</span>
</template>
