function sumas(arreglo){
    let valor = Math.round(arreglo.length/2);
    for(i = 0; i < valor; i++){
        console.log(arreglo[i]+arreglo[arreglo.length-(i+1)]);
    }
}

sumas([1,2,3,4,5]);