<template>
    <span>
        Prix HT : {{ valeur }} €
        Prix TTC : {{ valeur + valeur * tva }} €
    </span>
</template>

<script setup>
import { defineProps, inject } from 'vue';
    //val qui vient du parent   
    defineProps({
        valeur: Number,
    })
    //val qui vient du grand parent, si la valeur est nulle : 0
    const tva = inject('tva', 0);
</script>
