

var pierre = document.getElementsByClassName('pierre')[0];
var feuille = document.getElementsByClassName('feuille')[0];
var ciseaux = document.getElementsByClassName('ciseaux')[0];

var userScore = document.getElementById('user-score');
var computerScore = document.getElementById('computer-score');

var resultSentence = document.getElementById('result_sentence');

userScore.innerHTML=0;
computerScore.innerHTML=0;


var values = ["pierre", "feuille", "ciseaux"];

var choixUser = "null";
var choixComputer = "null";

pierre.addEventListener('click', function(event){
    choixUser = "pierre";
    principal(choixUser);
});

feuille.addEventListener('click', function(event) {
    choixUser = "feuille";
    principal(choixUser);
});

ciseaux.addEventListener('click', function(event) {
    choixUser = "ciseaux";
    principal(choixUser);
});

function principal(choixUtilisateur)
{
    var winner = "none";
    var randomNumber = Math.floor(Math.random() * 3);
    var choixOrdinateur = values[randomNumber];
    switch(choixUtilisateur)
    {
        case "pierre":
            if(choixOrdinateur == "feuille") winner = "ordinateur";
            else if (choixOrdinateur == "ciseaux") winner = "utilisateur";
            else winner = "none";
            break;
        case "feuille":
            if(choixOrdinateur == "ciseaux") winner = "ordinateur";
            else if (choixOrdinateur == "pierre") winner = "utilisateur";
            else winner = "none";
            break;
        case "ciseaux":
            if(choixOrdinateur == "pierre") winner = "ordinateur";
            else if (choixOrdinateur == "feuille") winner = "utilisateur";
            else winner = "none";
            break;
            
    }
    
    if (winner != "none"){
        if (winner == "ordinateur"){
            resultSentence.innerHTML= choixUtilisateur + " vs " + choixOrdinateur + ", l'ordinateur gagne !";
            computerScore.innerHTML++;
        } else {
            resultSentence.innerHTML= choixUtilisateur + " vs " + choixOrdinateur + ", le joueur gagne !";
            userScore.innerHTML++;
        }
    } else {
        resultSentence.innerHTML=choixUtilisateur + " vs " + choixOrdinateur + ", égalité !";
    }
    
}




























