//afficher des niveaux de difficulté du jeu
alert("Voici les niveaux de difficulté du jeu"  + "\n" +  "1-facile(0-100) 10 tentatives" + "\n" + "2-Moyen(0-1000) 8 tentatives" + "\n" + "3-Difficile(0-10000) 6 tentatives" + "\n" + "4-très difficile(0-100000) 5 tentative " )

//demander à l'utilisateur de choisir le niveau
 let NiveauEntre =parseInt(prompt("choisissez le niveau en entrant le chiffre correspondant au niveau entr 1 et 4"))

  //lire et verifier le nombre entré
  if(NiveauEntre ==1 ){
     
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 100)
    
    //demander à l'utilisateur d'entré un nombre
    
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 10;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre==2){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 1000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 8;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre == 3){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 10000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 6;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre == 4){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 100000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 5;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
    
 else if(NiveauEntre <= 0 || NiveauEntre > 4 || NiveauEntre !=integer ) {
     //lire et verifier le nombre entré
 if(NiveauEntre ==1 ){
     
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 100)
    
    //demander à l'utilisateur d'entré un nombre
    
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 10;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre==2){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 1000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 8;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre == 3){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 10000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 6;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
     else if(NiveauEntre == 4){
         
    //géneration des nombres aleatoires
    function getRandomInt(min , max) {
        return Math.floor(Math.random() * (max + min)) + min;
    }
    let nbgenere=getRandomInt(0 , 100000)
    
    //demander à l'utilisateur d'entré un nombre
    let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
    
    //verification du nombre entré avec le nombre géneré
    let etat = false
    //nombre de tentatives 
    
    let nbTentativeAutorise = 5;
    let nbTentative = 0;
    
    do {
        let Nbreentre =parseInt(prompt( "veuillez entrez un nombre"))
        if (Nbreentre < nbgenere){
            alert("c'est moins")
            console.log(nbgenere)
        }
        else if (Nbreentre > nbgenere){
            alert("c'est plus")
            console.log(nbgenere);
        }
        if (Nbreentre === nbgenere){
            alert("Félicitations")
            etat= true 
            console.log(nbgenere);
        }
        
        nbTentative++
    } while( etat===false && nbTentative < nbTentativeAutorise)
     }
 }








