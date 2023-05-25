<template >
    <div>
        {{ produit.nom }} 
        {{ produit.quantiteEnStock }}
        <PrixComponent :valeur="produit.prixUnitaire" />
        
        <input type="number" placeholder="quantité" v-model="quantiteReservee">
        <button @click="ajouter" :disabled="etat">Ajouter dans le panier</button>
    </div>
</template>

<script>
import PrixComponent from './PrixComponent.vue'

export default {
    components: {
        PrixComponent
    }
}
</script>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
defineProps({
    produit: { }
})
const emit = defineEmits(['sendData'])

const quantiteReservee = ref(null)
const etat = ref(false)

const ajouter = () => {
    emit('sendData', quantiteReservee.value)
    etat.value = true
}
/*export default {
    name: "ProduitComponent",
    props:{
        produit: { },
    },
    data(){
        return{
            quantite: 0,
            total: 0,
            etat: false
        }
    },
    methods:{
        ajouterQuantite(){
            this.total += this.quantite * this.produit.prixUnitaire;
            this.$emit("sendData", this.total);
            if(this.quantite != 0){
                this.etat = !this.etat;
            }
        }
    }
}*/
</script>

<style scoped>
    
</style>