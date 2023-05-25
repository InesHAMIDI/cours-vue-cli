<template >
    <div>
        <p>Resultat : {{ resultat }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    computed:{
        op(){
            return this.$route.params.op;
        },
       a(){
            return this.$route.query.a;
       },
       b(){
            return this.$route.query.b;
       },
       operateur(){
            if(this.op == "plus"){
                return "+";
            }
            else if (this.op == "moins"){
                return "-";
            }
            else if(this.op == "div"){
                return "/";
            }
            else if(this.op == "fois"){
                return "*";
            }
            return "";
        },
        resultat(){
            return eval(this.a + this.operateur + this.b);
        }
    }
}
</script>
<style scoped>
    
</style>