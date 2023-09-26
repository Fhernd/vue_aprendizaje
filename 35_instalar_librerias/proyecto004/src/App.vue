<template>
  <div id="app">
    <h1>{{ mensaje }}</h1>
    <listado-articulos></listado-articulos>
  </div>
</template>

<script>
import ListadoArticulos from './components/ListadoArticulos.vue'
export default {
  components: {
    'listado-articulos': ListadoArticulos
  },
  name: 'app',
  data() {
    return {
      mensaje: 'Listado de productos mediante petición Ajax'
    }
  }
}
</script>

<style>
h1 {
  text-decoration: underline;
}
</style>
