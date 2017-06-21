/*Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"*/
var CreationTableauLangages = function () {
	var langages = new Array("Html","CSS","Java","PHP");
	return langages;
}
/*Créer un tableau "nombres" contenant les nombres de 0 à 5*/
var CreationTableauNombres = function () {
	var nombres = new Array(0,1,2,3,4,5);
	return nombres;
}
/*Remplacer le troisième élément du tableau par "Javascript"*/
var RemplacementElement = function (langages) {
	langages[2]="Javascript";
	return langages;
}
/*Ajouter "Ruby" et "Python" à la fin du tableau*/
var AjoutElementLangages = function (langages) {
	langages.push("Ruby");
	langages.push("Python");
	return langages;
}
/*Ajouter "-2" et "-1" au début du tableau nombres*/
var AjoutElementNombres = function (nombres) {
	nombres.unshift(-1);
	nombres.unshift(-2);
	return nombres;
}
/*Supprimer le premier élément du tableau langages*/
var SuppressionPremierElement = function (langages) {
	langages.shift();
	return langages;
}
/*Supprimer le dernier élément du tableau langages*/
var SuppressionDernierElement = function (langages) {
	langages.pop();
	return langages;
}
/*Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"*/
var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
	return reseaux_sociaux = reseaux_sociaux_chaine.split(",");
}
/*Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule*/
var ConversionTableauChaine = function (langages) {
	var langages_chaine = langages.toString();
	//console.log("TEST: "+langages.toString());
	return langages_chaine;
}
/*Trier le tableau "reseaux_sociaux"*/
var TriTableau = function (reseaux_sociaux) {
	return reseaux_sociaux.sort();
}
/*Bonus : Inverser le tableau "langages"*/
var InversionTableau = function (reseaux_sociaux){
	return reseaux_sociaux.reverse();
}
