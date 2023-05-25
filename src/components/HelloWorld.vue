<template>
  <div class="hello">
    Hello you from {{ ville }}
  </div>
  <div>
    Hello
    <!--permet de récup la valeur entre <HelloWorld></HelloWorld>, ici Doe est val par défaut-->
    <slot> Doe </slot> 
  </div>
  <div>
    Welcome to {{ nom }}
  </div>
  <!-- C'est plus propre comme ça, on encombre pas le DOM avec des span créés pour rien et tout-->
  <ul>
    <li v-for="elt of numbers" :key="elt">
      <template v-if="elt % 2 == 0">
        {{ elt }} est pair
      </template>
      <template v-else>
        {{ elt }} est impair
      </template>
    </li>
  </ul>
  <!-- Message avec du html dedans défini dans data -->
  <div v-html="msg"></div>

  <!-- C'est dégueulasse, on évite de faire ça -->
  <p> {{ direBonjour() }}</p>

  <!-- Var lien dans data, on peut aussi juste mettre :href et il comprend le v-bind-->
  <div><a v-bind:href="lien">lien</a></div>

  <!-- Même chose que v-on:click="" -->
  <button @click="sayHello">Click</button>

  <!-- Un bouton active ou désactive le 2nd, on utilise v-bind -->
  <button :disabled="!activated" @click="changerEtat"> Click me ! </button>
  <button :disabled="activated" @click="changerEtat"> Boop </button>
  
  <!-- Var lienTarget dans Data-->
  <div><a v-bind="lienTarget">lien2</a></div>

  <!-- Met à jour lastname en temps réel -->
  <div>
    <label for="lastnameArea">LastName</label>
    <input type="text" id="lastnameArea" v-model="lastname">
    <p> {{ lastname }}</p>
  </div>

  <div id="intro">On peut lier des valeurs dans le CSS, c'est incroyable</div>

  <div>
    <input type="text" placeholder="nom" v-model="firstname"/>
    <button @click="envoyer">Sent to parent</button>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue';
 
 const emit = defineEmits(['sendData'])
 defineProps({
       ville: { }
   })
  const bgColor = ref('tomato')
  const nom = ref('Wick')
  const numbers = ref([3,4,6,9])
  const msg = ref("<p>Bonjour tout le monde</p>")
  const lien =  ref("http://francefootball.fr")
  const activated = ref(true)
  const lienTarget = ref({ href: "http://francefootball.fr", target: "_blank"})
  const lastname = ref("Wick")
  const firstname = ref("")

 const direBonjour = () => {
   return `Bonjour ${nom.value}`
 }
 const sayHello = () => {
   alert(`Bonjour ${nom.value}`)
 }
 const changerEtat = () => {
   activated.value = !activated.value
 }
 const envoyer = () => {
   emit('sendData', firstname.value)
 }

/*export default {
  name: 'HelloWorld',
  //soit on le défini comme ça pour vrmt détailler le props, soit on peut juste faire props : ['ville']
  props: {
    ville: {
      default: 'Paris'
    }
  },
  // permet d'utiliser ces valeurs dans le template
  data(){
    return {
      nom: "wick",
      firstname:"",
      lastname: "doe",
      numbers: [2, 5, 8, 3],
      msg: "<p>Bonjour tout le monde</p>",
      lien: "http://www.francefootball.fr",
      etat: false,
      //le target blank pour que ça ouvre dans un nv onglet
      lienTarget: {href: "http://www.francefootball.fr", target: "_blank"},
      bgColor: 'blue',

    }
  },
  methods: {
    direBonjour(){
      return `Bonjour ${this.nom}`;
    }, 

    sayHello(){
      alert(`Bonjour ${this.nom}`);
    },

    activateDeactivateButton(){
      this.etat = !this.etat;
    },

    envoyer(){
      this.$emit("sendData", this.firstname);
    }
  }
}*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#intro{
  background-color: v-bind('bgColor');
}
</style>
