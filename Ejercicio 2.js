function promedio(arreglo){
    let acum = 0;
    arreglo.forEach(element => {
        acum += element;
    });
    console.log("la suma de todos los elementos es: " + acum + " y su promedio es: "+ acum/arreglo.length);
}

promedio([1,2,3,4,5,6]);