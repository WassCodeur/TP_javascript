//Demander à l'utilisateur d'entrer son nom
let nom = prompt("Quel est votre nom ?");
//Demande à l'utilisateur le nombre de ses notes
let NombreDeNote = parseInt(prompt("Combien de Notes à vous ?"));
let sum=0;
for (let i=1; i <= NombreDeNote; i++){
    let Notes=parseInt(prompt('entrez vos notes'));
    sum = sum +Notes;
};
//Calcul de la moyenne et effichage du resultat
let moyenne = sum/NombreDeNote;
let VotreResultat = `Nom : ${nom}  Moyenne : ${moyenne}`
alert( VotreResultat)
