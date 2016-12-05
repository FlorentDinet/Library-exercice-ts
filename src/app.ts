import * as moment from '../bower_components/moment/moment';

import { Livre } from './App/Livre';
import { Ecrivain } from './App/Ecrivain';
import { Edition } from './App/Edition';

function showInHTML(divName: string, output: string) {
    const elt = document.getElementById(divName);
    elt.innerHTML = output;
}

var editionGriffon = new Edition(
    "Griffon",
    "Editeur de livres pour enfant",
    new Date(),
    15
);

var oReilly = new Edition(
    "O'Reilly",
    "Edition",
    new Date(),
    17
);

var jkRowling = new Ecrivain(
    "J.K Rowling",
    "jk.rowling@gmail.com",
    "London",
    ["Harry Potter"]
);

var jeanLouis = new Ecrivain(
    "J.L Script",
    "jl.script@gmail.com",
    "Bagdad",
    ["Eloquent Javascript"]
);

var harryPotter = new Livre(
    "Harry Potter",
    "Exercitation laboris in sunt voluptate in laboris dolor est duis commodo veniam elit consectetur irure.",
    16.99,
    editionGriffon,
    657,
    new Date(),
    [],
    [],
    new Date(2013,6,23),
    [jkRowling],
    true
    );

var eloquentJavascript = new Livre(
    "Eloquent Javascript",
    "Sunt laborum qui id est in aliquip deserunt ut.",
    24.89,
    oReilly,
    345,
    new Date(),
    [],
    [],
    new Date(2013,6,23),
    [jeanLouis],
    true
    );


harryPotter.formatterTitre();

harryPotter.tronquerResume(5);

harryPotter.afficherTitreResume();
harryPotter.ajouterCommentaires(["Super bouquin", "Génial !"]);
harryPotter.ajouterCommentaires(["Super bouquin", "Génial !"]);

console.log("Age du livre : ",harryPotter.calculerAgeLivre());
console.log("Est plus vieux que 1970" , harryPotter.isOlderThan1970());
console.log("Prix formaté : ",harryPotter.formatterPrix());
console.log("Nombres de mots dans le titre : ",harryPotter.calculerNbMotsTitre());
console.log("Taille du livre : ", harryPotter.tailleLivre());


jkRowling.ajouterLivre(harryPotter);
jkRowling.ajouterLivre(eloquentJavascript);
jkRowling.supprimerLivre(eloquentJavascript);
console.log("La collection de J.K.R : ",jkRowling.$collection);

console.log("Validité de l'email : ",jkRowling.testEmail());

harryPotter.ajouterEcrivain(jeanLouis);

console.log(harryPotter.$ecrivains);

harryPotter.supprimerEcrivain(jeanLouis);

console.log("Les écrivains d'HP : ",harryPotter.$ecrivains);

console.log("HP dispo à la vente : ",harryPotter.$dispoVente);

jkRowling.retirerVente([harryPotter,eloquentJavascript]);

console.log("HP dispo à la vente : ",harryPotter.$dispoVente);
console.log("Eloquent JS dispo à la vente : ",eloquentJavascript.$dispoVente);


