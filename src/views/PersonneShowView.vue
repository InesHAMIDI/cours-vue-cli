<template>
    <h1> Gestion de personnes </h1>
    <PersonneAdd @send-data="addPersonne" />

    <h2> Liste de personnes </h2>
    <ul v-if="!erreur">
        <li v-for="elt in personnes" :key="elt.id">
             {{ elt.nom }} {{ elt.prenom }} 
             <router-link :to="{
                name: 'personne-details', 
                params: {id: elt.id}
             }">consulter</router-link>

             <button @click="supprimerPersonne(elt.id, ind)"> Delete </button>
        </li>
    </ul>
    <p v-else>Erreur : {{ erreur }}</p>
</template>
<script>
import PersonneAdd from '@/components/PersonneAdd.vue'
export default {
    mounted(){
        /*axios({
            method: 'GET',
            url: 'http://localhost:3000/ws/personnes'
        })
        .then(response => this.personnes = response.data);*/
        // OU 
        this.axios.get(`${this.baseUrl}/personnes`)
        .then(response => this.personnes = response.data)
        .catch(err => this.erreur = err);
    },
    data(){
        return{
            personnes:[
                //{id: 1, nom: "wick", prenom: "john", age: 45},
                //{id: 2, nom: "Dalton", prenom: "john", age: 50},
                //{id: 3, nom: "Maggio", prenom: "Candice", age: 35},
            ], 
            erreur: ""
        }
    },
    components:{
        PersonneAdd
    },
    methods: {
        addPersonne(obj){
            this.personnes.push({ id: 4, ...obj });
        },
        supprimerPersonne(id, ind){
            this.axios.delete(`${this.baseUrl}/${id}`)
                .then(( ) => {
                    this.personnes.splice(ind, 1);
                })
                .catch(err => this.erreur = err);
        },
    },
}
</script>
<style scoped>
    
</style>