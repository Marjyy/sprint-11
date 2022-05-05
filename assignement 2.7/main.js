`use strict`

//Interval de 2000ms pour afficher le texte Hello
const HydrateFn = setInterval(function(){
    document.write(`Hello`)
}, 2000);


 // Arrêter l'affichage au bout d'une minute   
    
setTimeout(StopFn,60000);

// Nettoyer l'interval

function StopFn (){
    clearInterval(HydrateFn)};