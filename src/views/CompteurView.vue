<template>
    <div>
        <h1>Compteur : {{ compteur.etat }}</h1>
        <button @click="decrementer">-</button>

        <input type="number" v-model="compteur.valeur" />
        <button @click="incrementer">+</button>
    </div>
</template>

<script setup>
//API COMPOSITION 2 : better, bcp plus simple pour le coup
import { reactive, onUpdated } from 'vue';
const count = { valeur: 0, etat: 'nul' }
//const compteur = ref(0) // compteur =  { value: 0}
const compteur = reactive(count)

const incrementer = () => {
    compteur.valeur++
}
const decrementer = () => {
    compteur.valeur--
}
onUpdated(() => {
    if (compteur.valeur > 0) {
        compteur.etat = 'positif'
    } else if (compteur.valeur < 0) {
        compteur.etat = 'négatif'
    } else {
        compteur.etat = 'nul'
    }
})

// API COMPOSITION METHODE 1 : la moins bonne
/*import {ref} from 'vue';
export default {
    setup(){
        const compteur = ref(0); // même chose que : compteur =  {value: 0}

        const incrementer = () => {
            compteur.value++;
        }
    
        const decrementer = () => {
            compteur.value--;
        }
        return{
            compteur,
            incrementer,
            decrementer
        }
    }
}*/

/*
// API OPTION : 
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        incrementer() {
            this.count++;
        },
        decrementer() {
            this.count--;
        },
    }
};*/
</script>
<style scoped>
button {
    margin-left: 10px;
    margin-right: 10px;
}
</style>