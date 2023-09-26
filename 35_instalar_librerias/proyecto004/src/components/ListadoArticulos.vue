<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tr v-for="articulo in articulos">
                <td>{{ articulo.codigo }}</td>
                <td>{{ articulo.descripcion }}</td>
                <td>{{ articulo.precio }}</td>
            </tr>
        </table>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
    created() {
        axios.get('http://scratchya.com.ar/vue/datos.php')
            .then((respuesta) => {
                this.articulos = respuesta.data;
            })
    },
    data() {
        return {
            articulos: []
        }
    }
}
</script>
  
<style>
table {
    border-collapse: collapse;
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
}

tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
}</style>
