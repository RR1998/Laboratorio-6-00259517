function tipos(arreglo){
    contNumber = 0;
    contString = 0;
    contNull = 0;
    contBoolean = 0;
    arreglo.forEach(element => {
        if(typeof(element) == "string"){
            contString++;
        }
        if(typeof(element) == "number"){
            contNumber++;
        }
        if (typeof(element) == "boolean"){
            contBoolean++;
        }
        if(typeof(element) == null){
            contNull++;
        }
    });
    console.log(contString + " " +contNumber + " "+ contBoolean + " " + contNull);
}
tipos([1,"2",3, null, true]);