/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
	return texte.length;
}
/*Remplacer le premier e de la chaine par un espace*/
var remplaceECar = function (texte) {
	//var premiereOccurrence = texte.search('e'); //Trouver l'indice de la première occurrence de la lettre 'e'
	//texte[premiereOccurrence]= " ";
	
	// var premiereOccurrence = texte.indexOf("e");
	//return texte.charAt(premiereOccurrence);
	//return texte;
	return texte.replace("e", " ");
}
/*Concatener les deux chaines de caractères*/
var concatString = function (texte1, texte2) {
	return texte1.concat(texte2);
}
/*Afficher le cinquième caractère de la chaine*/
var afficherCar5 = function (texte) {
	return texte[4];
}
/*Afficher les 9 premiers caractères*/
var afficher9Car = function (texte) {
	return texte.substr(0, 9);
}
/*Mettre en majuscule la chaine*/
var majusculeString = function (texte) {
	return texte.toUpperCase();
}
/*Mettre en minuscule la chaine*/
var minusculeString = function (texte) {
	return texte.toLowerCase();
}
/*Supprimer les espaces avant et après la chaine*/
var SupprEspaceString = function (texte) {
	return texte.trim();
}
/*Afficher true si le parametre d'entrée de la fonction est de type string*/
var IsString = function (texte) {
	return typeof texte == "string";
}
/*Afficher l'extension du fichier*/
var AfficherExtensionString = function (texte) {
	var point = texte.indexOf(".");
	return texte.substr(texte.indexOf(".")+1, texte.length-1);

	//var res = str.slice(0);
	//return texte.slice(".",texte.length);
	//return texte.lastIndexOf(".",texte.length);
}
/*Compter le nombre d'espace dans la chaine*/
var NombreEspaceString = function (texte) {
	var elements = texte.split(" "); //Je divise ma chaine en retirant les espaces et je stocke le tout dans un tableau.
	return elements.length-1;
}
/*Inverser une chaine de caractères*/
var InverseString = function (texte) {
	return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
 /*Calculer la puissance d'un nombre par rapport à un autre (x à la puissance y)*/
var calculPuissance = function (x, y) {
	return Math.pow(x,y);
}
/*Afficher la valeur absolue d'un nombre*/
var valeurAbsolue = function (nombre) {
	return Math.abs(nombre);
}
/*Afficher les valeurs absolues de plusieurs nombres*/
var valeurAbsolueArray = function (array) {
	return array.map(Math.abs);
}
/*Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche*/
var sufaceCercle = function (rayon) {
	return Math.round(Math.PI * Math.pow(rayon,2));
}
/*Calculer l'hypothènuse d'un triangle rectangle*/
var hypothenuse = function (ab, ac) {
	return Math.hypot(ab, ac); 
	//Math.pow(ab,2) + Math.pow(ac,2);
}
/*Calculer l'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.*/
var calculIMC = function (poids, taille) {
	return parseFloat((poids/ Math.pow(taille,2)).toFixed(2));
}
