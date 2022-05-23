let nom = prompt("veuillez entrer votre nom")

let prenom = prompt("Votre prenom s'il vous plait")
let annee = parseInt(prompt("votre date de naissance (entrez seulement l'année de naissance)"))
let email = prompt("Votre E-mail s'il vous plait")
let sexe = prompt("votre sexe(M ou F) \n M : si vous etes Homme \n F : si vous etes Femme")
if(sexe="M"){
    sexe="Homme" 
}else if (sexe= "F"){
    sexe="Femme"
}
let MotDePass = parseInt(prompt("créez un mot de passe"))
let ConfirmPassWord = parseInt(prompt("veuillez confirmer votre mot de passe"))
let VosInformations;
    VosInformations=`Nom : ${nom} \n\n`+
                    `Prénom : ${prenom} \n\n`+
                    `E-mail : ${email} \n\n`+
                    `sexe : ${sexe} \n\n`+
                    `Mot de passe : ####`
if(MotDePass === ConfirmPassWord){
    alert(VosInformations)
    let boir= "voulez vous boire ?"

    if (boir ="oui") {
    
         let menu =parseInt(prompt(`Alors faites votre choix \n`+
                                    `1.sprite \n`+
                                    `2.Beaufort\n`+
                                    `3.Fanta \n`+
                                    `4.Racine\n`+
                                    `5.Malta \n`+
                                    `6.Guinness \n`+
                                    `7.Pepsi \n`+
                                    `8.RedBull\n` ))

         switch(menu){
             case 1 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec sprite`)
             break;
             case 2 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Beaufort`)
             break;
             case 3 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Fanta`)
             break;
             case 4 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Racine`)
             break;
             case 5 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Malta`)
             break;
             case 6 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Pespi`)
             break;
             case 8 : 
             alert(`Tenez ${prenom}, faites vous plaisir avec Redbull`)
             break;
         }

    }

    /*const sprite= "Sprite";
        alert("1. Sprit\n"+
        "2. Beaufort\n"+  
        "3. Fanta"          )
    const Beaufort ="Beaufort";
    const Fanta = "Fanta";
    const Racine ="Racine";
    const Malta = "Malta";
    const Guinness ="Guinness";
    const Pepsi ="Pepsi";
    const RedBull ="RedBull";
    let menu =`Alors faites votre choix \n`+
    `1.${sprite} \n`+
    `2.${Beaufort} \n`+
    `3.${Fanta} \n`
    `4.${Racine} \n`+
    `5.${Malta} \n`
    `6.${Guinness} \n`+
    `7.${Pepsi} \n`+
    `8.${RedBull} \n`;*/
  
                                                    
           

}
 
else {
    alert("vos mots de passe ne sont pas conforme")   
}




      
