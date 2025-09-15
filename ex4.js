let montant_ht = 100;
const taux_tva = 0.2;

let montant_ttc = montant_ht * (1 + taux_tva);
let montant_tva = montant_ttc - montant_ht;

console.log("Montant HT : " + montant_ht + " €");
console.log("Montant TTC : " + montant_ttc + " €");
console.log("Montant TVA : " + montant_tva + " €");
