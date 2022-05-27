//declaration de la variable pour poser la question
let Reponse;
//declaration de la boucle
do {
    if(Reponse !="Oui"){
        Reponse = prompt("Je t'ai pas demandé de ne pas sortir après 18 heure ?");
    }else{
        alert('kpraaaaa!!!')
        break
    }

} while (Reponse !="Oui" || Reponse =="Oui" );