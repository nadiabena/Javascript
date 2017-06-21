/*FAIS*/
var selectElementsStartingWithA = function(array) {
    var i;
    var tableContenantA = [];
    for(i=0;i<array.length;i++){
        if(array[i].charAt(0).toUpperCase() === "A"){   
            tableContenantA.push(array[i]);
        }
    }
    return tableContenantA;
}
/*FAIS*/
var selectElementsStartingWithVowel = function(array) {
    var i;
    var tableContenantVowel = [];
    for(i=0;i<array.length;i++){
        if((array[i].charAt(0)).toUpperCase() === "A" || (array[i].charAt(0)).toUpperCase() === "E" ||  
            (array[i].charAt(0)).toUpperCase() === "I" || (array[i].charAt(0)).toUpperCase() === "O" || 
            (array[i].charAt(0)).toUpperCase() === "U" || array[i].charAt(0) === "Y")
                tableContenantVowel.push(array[i]);
    }
    return tableContenantVowel;
}
/*FAIS*/
var removeNullElements = function(array) {
    var i;
    var test = [];
    for(i=0;i<array.length;i++){
        if(array[i] !== null){
           test.push(array[i]);
        }else{
            array.splice(i,1); 
        }
    }
    return test;
}
/*FAIS*/
var removeNullAndFalseElements = function(array) {
    var i;
    var tableau = [];
    for(i=0;i<array.length;i++){
        if(array[i] !== null && array[i] !== false){
            tableau.push(array[i]);
        }else{
            //array.splice(i,1);
        }
    }
    return tableau;
}
/*FAIS*/
var reverseWordsInArray = function(array) {
    var i;
    for(i=0;i<array.length;i++){
        array[i] = array[i].split("").reverse().join("");
    }
    return array;
}
/*FAIS*/

 it('makes every possible pairing of students', function() {
        var result = everyPossiblePair(['Jon', 'Tyrion', 'Daenerys']);
        // sorted alphabetically
        expect(result).toEqual([
            ['Daenerys', 'Jon'],
            ['Daenerys', 'Tyrion'],
            ['Jon', 'Tyrion']
        ]);
    });



var everyPossiblePair = function(array) {
    var i,j;
    var elementEnCours;

    for(i=0;i<array.length;i++){
        elementEnCours = array[i];

        for(j=i+1;j<array.length+1;j++){

            array[j-1] = new Array(elementEnCours, array[j]);
            //array.sort();
        }
    }
    return array;
}
/*FAIS*/
var allElementsExceptFirstThree = function(array) {
     array.splice(0,array.length-5); //Supprime à partir de l'indice 0 + la quantité mentionnée
     return array;
}
/*FAIS*/
var addElementToBeginning = function(array, element) {
     array.unshift(element);
     return array;
}
/*FAIS*/
var sortByLastLetter = function(array) {
    for(var i=0;i<array.length;i++){ //J'inverse d'abord chaque mot
        array[i] = array[i].split("").reverse().join("");
    }
    array.sort();  //Puis, je trie
    for(i=0;i<array.length;i++){ //Là j'inverse à nouveau..
        array[i] = array[i].split("").reverse().join("");
    }
    return array;
}
/*FAIS*/
var getFirstHalf = function(string) {
    return string.substring(0,Math.round(string.length/2));
}
/*FAIS*/
var makeNegative = function(number) {
    if(number>0){
        return number*-1;
    }
    return number;
}
/*FAIS*/
var numberOfPalindromes = function(array) {
    var i;
    var compteur=0;
    for(i=0;i<array.length;i++){
        if(array[i] === array[i].split("").reverse().join("")) //Je découpe ma chaîne en ajoutant des ',' puis j'inverse et je 
                   compteur+=1;                                //joins en retirant les virgules.
    }
    return compteur;
}
/*FAIS*/
var shortestWord = function(array) {
    var i;
    var tailleLaPlusPetite=array[0].length;
    var tailleElement;
    var position=0;
    
    for(i=0;i<array.length;i++){
        tailleElement = array[i].length;
        if(tailleElement <= tailleLaPlusPetite){
            tailleLaPlusPetite = tailleElement;
            position = i;       //Je sauvegarde la position de l'élément le plus petit..
        }
    }
    return array[position];
}
/*FAIS*/
var longestWord = function(array) {
    var i;
    var tailleLaPlusLongue=array[0].length;
    var tailleElement;
    var position=0;
    
    for(i=0;i<array.length;i++){
        tailleElement = array[i].length;
        if(tailleElement>=tailleLaPlusLongue){
            tailleLaPlusLongue = tailleElement;
            position = i;
        }
    }
    return array[position];
}
/*FAIS*/
var sumNumbers = function(array) {
    var i;
    var somme=0;
    for(i=0;i<array.length;i++){
        somme += array[i];
    }
    return somme;
}
/*FAIS*/
var repeatElements = function(array) {
    return array.concat(array);
    /*var i;
    var tableauCopie = new Array();
    for(i=0;i<array.length;i++){
        tableauCopie[i] = array[i];
    }
    return array.concat(tableauCopie);*/
}
/*FAIS*/
var stringToNumber = function(string) {
    return Number(string); //Ou parseInt();
}
/*FAIS*/
var calculateAverage = function(array) {
    var i;
    var somme=0;
    var moyenne=0;
    for(i=0;i<array.length;i++){
        somme+=array[i];
    }
    moyenne = somme/array.length;
    return moyenne;
}
/*FAIS*/ 
var getElementsUntilGreaterThanFive = function(array) {
    var i;
    var tableau = [];
    for(i=0;i<array.length;i++){
        if(array[i]>5){
            array.splice(i, (array.length-i)); //Supprimer à partir d'où je suis jusqu'à la fin du tableau 
            return array;
        }
    }
    return array;
}
/**/
var convertArrayToObject = function(array) {
}
/*FAIS*/
var getAllLetters = function(array) {
    var i;
    var j;
    var motEnCours;
    var tableauDeLettre = [];

    for(i=0;i<array.length;i++){
        motEnCours = array[i];
        for(j=0;j<motEnCours.length;j++){

            //if(tableauDeLettre[j].){

            //}
            tableauDeLettre[j] = motEnCours.charAt(j);
        }
    }
    tableauDeLettre.sort();
    return tableauDeLettre;
}

/**/
var swapKeysAndValues = function(object) {
    return 'Write your method here';
}
/**/
var sumKeysAndValues = function(object) {
    return 'Write your method here';
}
/*FAIS*/
var removeCapitals = function(string) {
    var i;

    for(i=0;i<string.length;i++){
        if(string.charAt(i) === (string.charAt(i)).toUpperCase()){
            console.log("je rentre ici.."+string.charAt(i));
string.match(/[^A-Z]/g).slide(0,string.length);
            //string = string.replace(string.charAt(i),"");
        }
    }
    return string;
    //return string.match(/[^A-Z]/g).slide(0,string.length);
}
/*FAIS*/
var roundUp = function(number) {
    return Math.ceil(number);
}
/*FAIS*/
var formatDateNicely = function(date) {
    var d = new Date(date);
    if(d.getDate()<10){
        var myDate = "0"+d.getDate();
        if((d.getMonth()+1)<10){
            return myDate+"/0"+(d.getMonth()+1)+"/"+d.getFullYear();
        }else{
            return myDate+"/"+(d.getMonth()+1)+"/"+d.getFullYear(); 
        }
    }else{
        return d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    }
}
/*FAIS*/
var getDomainName = function(string) {
    var at = string.search("@");
    var point = string.lastIndexOf(".");
    return string.substring(at+1,point);
}
/*PAS FAIS*/
var titleize = function(string) {
    return 'Write your method here';
}
/*FAIS*/
var checkForSpecialCharacters = function(string) {
    var expressionReguliere = /[^a-zA-Z0-9_]/; //Explication: Caractère non alpha-numérique(autre que underscore)
    return expressionReguliere.test(string); //Vérifie si j'ai trouvé dans ma string l'expression réguliére que j'ai défini..
}
/*FAIS*/
var squareRoot = function(number) {
    return Math.sqrt(number);
}
/*FAIS*/
var factorial = function(number) {
    var i;
    var factoriel=1;
    for(i=1;i<=number;i++){
        factoriel *=i;
    }
    return factoriel;
}
/*PAS FAIS*/
var findAnagrams = function(string) {
    if(string.length === 1){
        return new Array(string);
    }else if(string.length === 2){
        var tableau = new Array(string, string.reverse());
        return tableau.sort();
    }else{  //string.split("");
        var tableau = [];    
        for(var i=0;i<string.length;i++){
            var chaineAnagrame = string(i);
            for(var j=0;j<string-1;j++){
        
            }
        }
        return tableau.sort();
    }
}
/*FAIS*/
var convertToCelsius = function(number) {
    var degree = (number-32)*5/9;
    return Math.round(degree);
}
/*FAIS*/
var letterPosition = function(array) {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var i;
    for(i=0;i<array.length;i++){//array[i].toUpperCase()
        var lettre = array[i].toLowerCase();
        array[i] = alphabet.indexOf(lettre)+1;
    }
    return array;
}