<template>
  <div class="about">
    <p> valeur envoyée par l'enfant : {{ firstname }}</p>
  <!--<HelloWorld />--> 
   <HelloWorld ville="Marseille" @send-data="displayFirstname">Wick</HelloWorld> <!-- Valeur récupérée dans le <slot/> -->
  <!--<HelloWorld ville="Marseille"></HelloWorld> // Rempli le props ville --> 
</div>

  <router-link :to="{
                name: 'adresse', 
                query: {
                  rue: 'Paradis', 
                  ville: 'Marseille',
                  codePostal: 13400
                }
             }">
             Adresse
</router-link>

<button @click="goToPersonne">Consulter personne 3</button>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  },
  data(){
    return{
      firstname: null
    }
  },
  methods:{
    displayFirstname(value){
      this.firstname = value;
    },
    goToPersonne(){
      //this.$router.push('/personne/3')
      this.$router.push({name: 'personne-details', params: {id: 3}})
    }
  }
}
</script>
