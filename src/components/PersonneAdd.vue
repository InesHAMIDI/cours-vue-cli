<template >
    <h2>Ajouter une nouvelle personne</h2>
    <Form @submit="ajouterPersonne" ref="personneForm">
        <div>
            <label for="nom">Nom</label>
            <Field id="nom" type="text" name="nom" :rules="validateName"/>
            <ErrorMessage name="nom" />
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <Field id="prenom" type="text" name="prenom" :rules="validateName"/>
            <ErrorMessage name="prenom"/>
        </div>
        <div>
            <label for="age">Age</label>
            <Field id="age" type="number" name="age" :rules="validateAge"/> <!-- ou :rules="'minMax:18, 150'" -->
            <ErrorMessage name="age"/>
        </div>
        <button>Ajouter</button>
    </Form>
    <p v-if="erreur"> {{ erreur }}</p>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
    components: {
        Field,
        Form,
        ErrorMessage
    },
    data() {
        return {
            validateAge: yup
                .number()
                .required()
                .min(18, (params) =>  `Valeur min autorisée : ${params.min}, val saisie : ${params.value}`)
                .max(150, (params) => `Valeur max autorisée :  ${params.max}`),

            validateName: yup
                .string()
                .required("champ obligatoire")
                .matches(/^[A-Z]{1}.*/, `Premiere lettre en maj`),
            
            erreur: ""
        }
    },
    methods: {
        ajouterPersonne(values) {
            values.adresses= []
            this.axios.post(`${this.baseUrl}/personnes`, values)
                .then(response => {
                    this.$emit('sendData', response.data)
                    this.$refs.personneForm.resetForm()
                })
                .catch(err => this.erreur = err);
        },
    },
    emits: ['sendData'],
    mounted(){
        this.$refs.personneForm.setValues({ nom: 'Doe', prenom: 'John', age: 30 })
    }
}
</script>
<style scoped>
    
</style>