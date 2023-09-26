<script setup lang="ts">
import { ref } from 'vue'

const name = ref('John')
</script>

<template>
    <span>My name is {{ name }}</span>
</template>
