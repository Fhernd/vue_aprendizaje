<template>
  <div id="app">
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      mensaje: 'Mi primer componente'
    }
  }
}
</script>

<style>
h1 {
  text-decoration: underline;
}
</style>
