export function validate(field, that) {
    let isValid = true
    let error = false
    if (field.type == "email") {
        isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value);
        error = !isValid && "L'adresse email est invalide";
    }
    if (!field.value) {
        isValid = false;
        error = field.placeholder + " est vide";
    }
    that.setState({isValid: isValid});
    that.setState({message: error});
}
