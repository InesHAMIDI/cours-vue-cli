<template>
    <div>
        error 404 : page {{ $route.params.pathMatch }} pas trouvée
    </div>
    <button @click="toHome"> Home </button>
</template>
<script setup>
import { useRouter } from 'vue-router';

//ce truc est un composable :
const router = useRouter();
const toHome = () => router.push({ name: 'home'});

/*export default {
    computed:{
        page(){
            return this.$route.params.pathMatch;
        }
    }
}*/
</script>
<style scoped>
div{
    color: red;
}
</style>