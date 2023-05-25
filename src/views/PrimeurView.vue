<template>
    <h1>Liste de produits : {{ total }}</h1>
    <ProduitComponent v-for="(elt, ind) in produits" :key="elt.nom" :produit="elt" @send-data="calculerTotal($event, ind)">
    </ProduitComponent>
</template>
<script>
import ProduitComponent from '@/components/ProduitComponent.vue'
export default {
    name: 'PrimeurView',
    components: {
        ProduitComponent
    },
    data() {
        return {
            produits: [
                { nom: 'poivron', prixUnitaire: 4, quantiteEnStock: 10 },
                { nom: 'banane', prixUnitaire: 3, quantiteEnStock: 5 },
                { nom: 'citrouille', prixUnitaire: 10, quantiteEnStock: 100 },
            ],
            total: 0

        }
    },
    methods: {
        calculerTotal(qte, ind) {
            this.total += qte * this.produits[ind].prixUnitaire
            this.produits[ind].quantiteEnStock -= qte
        }
    },
    provide:{
        'tva': 0.2
    }
}
</script>
<style scoped>
    
</style>