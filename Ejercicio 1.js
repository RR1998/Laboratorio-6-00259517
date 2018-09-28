function ocurrencias(variable, arreglo){
    var contador = 0;
    arreglo.forEach(element => {
        if(element == variable){
            contador++;
        }
    });
    console.log("las ocurrencias de " + variable + " son: "+ contador);
}

var arreglo = [1,2,3,4,1,5,6];
ocurrencias(1, arreglo);
