<template>
  <div id="app">
    <h1>{{ mensaje }}</h1>
    <carta-poker></carta-poker>
    <carta-poker></carta-poker>
    <carta-poker></carta-poker>
    <carta-poker></carta-poker>
    <carta-poker></carta-poker>
  </div>
</template>

<script>

import CartaPoker from './components/CartaPoker.vue'

export default {
  components: {
    'carta-poker': CartaPoker
  },
  name: 'app',
  data() {
    return {
      mensaje: 'Mi Juego de Cartas'
    }
  }
}
</script>

<style>
h1 {
  text-decoration: underline;
}
</style>
