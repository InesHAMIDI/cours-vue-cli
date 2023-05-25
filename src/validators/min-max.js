import { defineRule } from "vee-validate";

defineRule('minMax', (value, [min, max]) => { 
    if (!value) {
        return "Champ obligatoire"
    }
    if (Number(value) < min) {
        return `Valeur min autorisée : ${min}`
    }
    if (Number(value) > max) {
        return `Valeur max autorisée : ${max}`
    }
    return true
})