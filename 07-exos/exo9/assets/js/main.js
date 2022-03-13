// EXERCICE 09
// 1. Dans un tableau de 10 entiers initialisé avec des valeurs aléatoires, trouver les rangs
// et les valeurs du plus petit et du plus grand élément, et les afficher dans la console.
// 2. Inverser les éléments d'un tableau de 10 éléments (sans passer par un tableau
// intermédiaire).
// 3. Trier un tableau de 10 nombres saisis au clavier, par ordre croissant.
// 4. Fusionner deux tableaux déjà triés par ordre croissant.
// 5. Dire si une valeur existe dans un tableau.

let tab1 = [
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
  Math.round(Math.random() * 10),
];
 
console.log(tab1);
console.log(`taille = ${tab1.length}`);
//console.log(tab1[2]);
for (let i=0 ; i< tab1.length ; i++){
    console.log("index " + i + " val:" + tab1[i]);
}
if (tab1[i]<=10){
    
}