<template>
    <span class="carta-poker">
        {{ valor }}<br>{{ nombre[tipo] }}
    </span>
</template>
  
<script>
export default {
    data() {
        return {
            tipo: Math.trunc(Math.random() * 4),
            valor: Math.trunc(Math.random() * 12) + 1,
            nombre: ['pica', 'corazon', 'diamante', 'trébol']
        }
    }
}
</script>
  
<style>
.carta-poker {
    display: inline-block;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 8rem;
    height: 13rem;
    font-size: 2rem;
    text-align: center
}
</style>
