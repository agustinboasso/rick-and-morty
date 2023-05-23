export default (data) =>{
    let errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email no es valido';
    }
    if(!data.email){
        errors.e2 = 'Ingrese email';
    }
    if(data.email.length > 35){
        errors.e3 = 'El email es demasiado largo, menos de 35 caracteres';
    }
    if(!/\S+@\S+\.\S+/.test(data.password)){
        errors.p1 = 'al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }

    return errors;
}