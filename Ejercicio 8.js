function matriz(matriz1, matriz2){
    matriz3=[];
    for (i=0; i<matriz1.length; i++){
        for(j=0; j<matriz1[i].length; i++){
            matriz3[i][j] = matriz1[i][j] + matriz2[i][j]; 
        }
    }
    console.log(matriz3);
}
