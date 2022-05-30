//declaration 
let variable = "jean";
console.log(variable);
let color = "rouge";
console.log(color);
color = "black";
console.log(color);
console.log(typeof (variable));
let isCorrect = false;

variable = 1;
console.log(variable);
//type des variables
console.log(typeof (variable));
console.log(typeof (isCorrect));

// let p = document.getElementById("toto");
// p.style.backgroundColor = "red";
// console.log(p);
// p.style.backgroundColor = "green";
let tableau = [1, 2, 4, 5];
console.log(tableau[2]);
tableau = [];
tableau[0] = "jean";
tableau[1] = "nina";
console.log(tableau);


let tab = ["voiture", 1, true];
//afficher 
console.log(tab[0], tab[1], tab[2]);
// tab=[true,"personne",1];
tab[0] = false; tab[1] = "personne";


//afficher sur le docuement avec document.write
let message = "<h1>mon message</h1>";
document.write(message);
////////////////////////////////////////
let prenom = "souhila";
let age = 35;
document.write('je suis ' + prenom + " j'ai" + age);
prenom = "lea";
document.write('je suis ' + prenom);
//////////////////////////////////////////////////
let x = 4; let y = 5;
let t = x + y;
console.log(t);


let i = 0;
i = i + 1; i++;

// conditions

//if(condition est vrai){ todo }else{ todo }

//== 
//=== 

if (isCorrect == true) {
    document.write('<h2>section2</h2>');
} else {
    console.log("pas d'entree");
}

//declarer une variable couleur = rouge (string) 
//si la couleur est rouge alors j'aurai une div p a(google)
//sinon j'aurai une div avec un image (telecharger) span (4 mots)
let couleur = "rouge";


if (couleur == "rouge") {
    document.write("<div><p>mon site  est  <a href='https://google.com'>Google</a></p></div>")
} else {
    document.write("<div>dd<img src='https://placehold.it/300'></div>");
}


// declarer 2 variables mail et password  initialiser les 2 variables
// verifier la condition mail et passwrod (si mail ET && passrowd sont Ok alors j'affiche une section main avec un message et une photo profil sinon h2 erreur de connexion.



let mail = "toto@exemple.com"; let psw = "aaa";
if ((mail == "toto@exemple.com") && (psw == "aaa")) {
    document.write("<main><p>vous etes connecté <img src='https://picsum.photos/200/300'></p></main>");
} else {
    document.write('<h2>erreur de connexion</h2>');
}










