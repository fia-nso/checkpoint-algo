function taillePhrase(phrase){
    var taille = 0
    for(var i =0; i< phrase.length; i++){
        taille = taille + 1
    }
return taille;
}

function nombreDeMots(phrase){
    var nbrMots = 1
    for(var i =0; i< phrase.length; i++){
        if(phrase[i]===" "){
            nbrMots = nbrMots + 1;
        }
    }
    return nbrMots
}

function nombreDeVoyels(phrase){
    var nbrVoyels =0

    for(var i =0; i<phrase.length; i++){
        if(phrase[i]==="a" || phrase[i]==="e" || phrase[i]==="y" || phrase[i]==="o"|| phrase[i]==="i" || phrase[i]==="u")
            nbrVoyels = nbrVoyels + 1;
    }
    return nbrVoyels
}