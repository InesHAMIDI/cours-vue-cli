<template >
    <h1>Identifiant de la personne à modifier : {{ id }}</h1>
    <Form @submit="modifierPersonne" ref="personneForm">
        <div>
            <label for="nom">Nom</label>
            <Field id="nom" type="text" name="nom" :rules="validateName" />
            <ErrorMessage name="nom" />
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <Field id="prenom" type="text" name="prenom" :rules="validateName" />
            <ErrorMessage name="prenom" />
        </div>
        <div>
            <label for="age">Age</label>
            <Field id="age" type="number" name="age" :rules="validateAge" />
            <ErrorMessage name="age" />
        </div>
        <button>Enregistrer</button>
    </Form>
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
                .required("Champ obligatoire")
                .min(18, (params) => `Valeur min autorisée : ${params.min}, valeur saisie : ${params.value}`)
                .max(150, `Valeur max autorisée 150`),
            validateName: yup
                .string()
                .required("Champ obligatoire")
                .matches(/^[A-Z]{1}.*/, "Première lettre en majuscule")
        }
    },
    computed: {
        id() {
            return this.$route.params.id
        },
    },
    mounted() {
        this.axios.get(`${this.baseUrl}/personnes/${this.id}`)
            .then((res) => this.$refs.personneForm.setValues(res.data))
            .catch(err => alert(err))
    },
    methods: {
        modifierPersonne(values){
            this.axios.put(`${this.baseUrl}/personnes/${this.id}`, {...values, adresses: [] })
            .then(() => this.$router.push({ name: 'personne'}))
            .catch(err => alert(err))

        }
    },
    // updated() {
    //     this.axios.get(`http://localhost:3000/ws/personnes/${this.id}`)
    //         .then((res) => {
    //             if (res.data.id != this.personne.id) {
    //                 this.personne = res.data
    //             }
    //         })
    //         .catch(err => alert(err))
    // }
}
</script>
<style ></style>