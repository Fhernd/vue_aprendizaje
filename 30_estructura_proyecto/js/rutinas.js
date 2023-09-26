Vue.component('tarjeta', {
    props: ['titulo', 'ancho'],
    template: `
      <div v-bind:style="{'width':ancho}" class="tarjeta">
        <h1 class="titulo-tarjeta">{{titulo}}</h1>
        <slot>Cuerpo tarjeta</slot>
      </div>
    `
})

new Vue({
    el: '#aplicacion'
})
