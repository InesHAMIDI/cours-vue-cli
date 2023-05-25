<template>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';
    const valeur1 = ref(0);
    const valeur2 = ref(0);

    const resultat = computed(() => valeur1.value + valeur2.value)
    onMounted(() => {
        setInterval(
            () => valeur1.value += 5,
            2000
        )
    })
//import { computed } from "vue";
/*export default {

data(){
        return{
            valeur1: 0,
            valeur2: 0,
            //resultat: 0
        }
    },
    created(){
       //this.resultat = computed(() => this.valeur1 + this.valeur2);
    },
    // soit on fait comme ça, soit on active les trucs commentés dans created
    computed:{
        resultat(){
            return this.valeur1 + this.valeur2;
        }
    },
    mounted(){
        setInterval(
            () => this.valeur1 += 5,
            2000
        )
    }
}*/
</script>
<style scoped>
    
</style>