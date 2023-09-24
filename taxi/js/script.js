"use strict";

//Variables
let prenom="John";
let santeMentale=10;
let nombreFeuRouge=0;
let nombreFeuRougeRestant=30;
let nombreTaxis=0;
//Tableau avec toute les musiques
let listMusique=["Anissa - Wejdene","Meteor - Kenya Grace","Believer - Imagine Dragon" ,"Shavkat - Freeze Corleone", "No Signal - WarEnd"];

//Fonction deprime permet de retirer 1 points de santé mentale et de le dire à chaque fois
function deprime(){
    santeMentale--;
    console.log("Oh non ! Ta santé mentale baisse de 1, tu es désormais à " + santeMentale + " points de santé mentale !");
}

//Fonction feuRouge permet d'augmenter le nombre de feu rouge dépassé et de le dire à chaque fois
function feuRouge(){
    nombreFeuRouge++;
    console.log("Tu as dépassé " + nombreFeuRouge + " feux rouges !");
}

//Fonction changementDeTaxi permet d'ajouter +1 a chaque fois que l'on change de taxis
function changementDeTaxi(){
    nombreTaxis++;
    console.log("Tu n'aimes vraiment pas ce taxi, il a vraiment une musique de merde ! C'est pourtant la " + nombreTaxis + "ieme fois que tu change de taxis !");
}

while(nombreFeuRouge<30 && santeMentale>0){ //On fait tourner cette boucle tant que le nombre de Feux Rouges n'a pas atteint 30 ou que la santée mentale de john n'a pas atteint 0
    listMusique = Math.floor(Math.random() * 6); //Cette ligne nous permet de prendre un chiffre au hasard entre 1 et 5, et suivant le chiffre qui en sort une musique dans le tableau listMusique est choisit
        switch(listMusique){ //On créer une switch, dans chaque cas une musique est choisit
            case 1: //Lorsque la musique "Anissa - Wejdene" est choisit au hasard, on appelle notre fonction deprime, feuRouge et changementDeTaxi
                console.log("Anissa - Wejdene");
                deprime();
                changementDeTaxi();
                feuRouge();
                break;
            case 2: //Dans tout les autres cas où ce n'est pas la musique "Anissa - Wejdene", on appelle simplement notre fonction feuRouge
                console.log("Meteor - Kenya Grace");
                feuRouge();
                break;
            case 3:
                console.log("Believer - Imagine Dragon");
                feuRouge();
                break;
            case 4:
                console.log("Shavkat - Freeze Corleone");
                feuRouge();
                break;
            case 5:
                console.log("No Signal - WarEnd");
                feuRouge();
                break;
        }
}

if(santeMentale==0 && nombreFeuRouge==30){ //si john n'a plus de santé mentale et qu'il est arrivé au bout des 30 feux rouges EXPLOSION !
    alert("EXPLOSIOOOOOOOOOOOOOOOOOOOON !");
}else if(santeMentale==0){ //si john n'a plus de santé mentale EXPLOSION !
    alert("EXPLOSIOOOOOOOOOOOOOOOOOOOON !");
}else if(nombreFeuRouge==30){ //si john a dépassé les 30 feux rouges, il est rentrée chez lui !
    alert("Tu es rentrée sain et sauf chez toi ! Il ne te reste que " + santeMentale + " points de santé mentale ! Au total tu aura traversée les 30 feux rouges sur la route, et tu aura changé " + nombreTaxis + " fois de taxis !");
}

