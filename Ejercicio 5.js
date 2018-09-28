function separado(arreglo, tipo){
    aux = [];
    arreglo.forEach(element => {
        if(typeof(element) == tipo){
            aux.push(element);
        }
    });
    console.log(aux);
}
separado([1, "cadena", "cadema"], "string");