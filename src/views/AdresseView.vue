<template>
    <h1>Adresses</h1>
    <ul>
        <!-- Pas fan de cette solution : -->
        <li>Rue : {{ adresse.rue }}</li>
        <li>Ville : {{ adresse.ville }}</li>
        <li>CP : {{ adresse.codePostal }}</li>
    </ul>
</template>
<script setup>
import {computed} from 'vue';
import { useRoute} from 'vue-router';

const route = useRoute();
const adresse = computed(() => route.query)


/*export default {
    computed:{
        adresse(){
            return this.$route.query;
        }
    }
}*/
</script>
<style scoped>
    
</style>