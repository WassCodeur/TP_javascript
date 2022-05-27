//Declaration de variable pour demaner le nom et l'age du client
let Nom =prompt("Quel est votre Nom ?")
const VotreAge =prompt("Entrz votre age actuel")
parseInt(VotreAge)
//declaration des variable pour le prix
let prix =0
let sum=0;

//Verification s'il est mineur ou majeur
 if( VotreAge < 18){
     alert("Vous etes mineur, ici c'est la cours des grands donc vous n'avez pas votre place ici")
 }else if(VotreAge>=18){
    alert("soyez les bienvenu.es")
    //Demander s-il vous veut boire quelque chose
    let Demande =prompt("Voulez boire quelque chose Oui ou Non ?")
    if(Demande =="Oui" || Demande =="OUI"){
    //Declarations de la variable menu et demande de choisir une boisson
    let menu =parseInt(prompt(`Alors voici notre menu, faites votre choix entrez juste le numero de la boisson entre (1 et 11)\n\n`+
       `1. sprite (400 XOF) \n`+
       `2. Beaufort (650 XOF) \n`+
       `3. Fanta (450 XOF) \n`+
       `4. Racine (675 XOF)\n`+
       `5. Malta (350 XOF) \n`+
       `6. Vinto (500 XOF) \n`+
       `7. Ponpon (350 XOF) \n`+
       `8. Tosso (2500 XOF)\n`+
       `9. Djama (500 XOF)\n`+
       `10. Doppel (525 XOF)\n`+
       `11. Coktail de fruits (450 XOF)\n`+
       `12. Coca-Cola de fruits (450 XOF)\n`));
switch(menu){
    case 1 : prix= 400
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec sprite`)
    break;
    case 2 : prix =650
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Beaufort`)
    break;
    case 3 : prix=450
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Fanta`)
    break;
    case 4 : prix=675
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Racine`)
    break;
    case 5 : prix=350
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Malta`)
    break;
    case 6 : prix=500
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Vinto`)
    break;
    case 7 : prix= 350
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Ponpon`)
    break;
    case 8 : prix=2500
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Tosso`)
    break;
    case 9 : prix=500
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Djama`)
    break;
    case 10 : prix=525
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Doppel`)
    break;
    case 11 : prix=450
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Coktail de fruits`)
    break;
    case 12 : prix=450
    alert(`Tenez Monsieur ${Nom}, faites vous plaisir avec Coktail de Coca-Cola`)
    break;
};

}else if(Demande !="Oui" || Demande !="OUI"){
 alert("Okay!!! Nous sommes à votre Disposition pour tout besoin")
    }
 };
 // lui demander s'il veut noire encore

do {
  let  VoulezBoireEncore =prompt("Voulez vous boire encrore s'il vous reponsez par Oui ou Non?")

    for (let index = 0; VoulezBoireEncore =="OUI"  || VoulezBoireEncore =="Oui" ; index++) {
        VoulezBoireEncore =prompt("Voulez vous boire encrore s'il vous reponsez par Oui ou Non?")

   
       let menu =parseInt(prompt(`Alors voici notre menu, faites votre choix entrez juste le numero de la boisson entre (1 et 11)\n\n`+
       `1. sprite (400 XOF) \n`+
       `2. Beaufort (650 XOF) \n`+
       `3. Fanta (450 XOF) \n`+
       `4. Racine (675 XOF)\n`+
       `5. Malta (350 XOF) \n`+
       `6. Vinto (500 XOF) \n`+
       `7. Ponpon (350 XOF) \n`+
       `8. Tosso (2500 XOF)\n`+
       `9. Djama (500 XOF)\n`+
       `10. Doppel (525 XOF)\n`+
       `11. Coktail de fruits (450 XOF)\n`+
       `12. Coca-Cola de fruits (450 XOF)\n`));
   switch(menu){
   case 1 : prix= 400
   alert(`Tenez  ${Nom}, faites vous plaisir avec sprite`)
   break;
   case 2 : prix =650
   alert(`Tenez  ${Nom}, faites vous plaisir avec Beaufort`)
   break;
   case 3 : prix=450
   alert(`Tenez  ${Nom}, faites vous plaisir avec Fanta`)
   break;
   case 4 : prix=675
   alert(`Tenez  ${Nom}, faites vous plaisir avec Racine`)
   break;
   case 5 : prix=350
   alert(`Tenez  ${Nom}, faites vous plaisir avec Malta`)
   break;
   case 6 : prix=500
   alert(`Tenez  ${Nom}, faites vous plaisir avec Vinto`)
   break;
   case 7 : prix= 350
   alert(`Tenez  ${Nom}, faites vous plaisir avec Ponpon`)
   break;
   case 8 : prix=2500
   alert(`Tenez ${Nom}, faites vous plaisir avec Tosso`)
   break;
   case 9 : prix=500
   alert(`Tenez ${Nom}, faites vous plaisir avec Djama`)
   break;
   case 10 : prix=525
   alert(`Tenez  ${Nom}, faites vous plaisir avec Doppel`)
   break;
   case 11 : prix=450
   alert(`Tenez  ${Nom}, faites vous plaisir avec Coktail de fruits`)
   break;
   case 12 : prix=450
   alert(`Tenez  ${Nom}, faites vous plaisir avec Coktail de Coca-Cola`)
   break;
   };
  
   }
   
} while ( VoulezBoireEncore =="OUI"  || VoulezBoireEncore =="Oui");
 //Demane s'il à fini ou il veut boire encore
 