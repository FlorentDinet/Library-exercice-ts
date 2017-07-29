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
    15,
    "48 Avenue du Maréchal Juin, 66100 Perpignan, France",
    "66100",
    "234 235 654 4567",

);

var Gnome = new Edition(
    "Gnome",
    "Editeur de livres pour enfant",
    new Date(),
    12,
    "24 Route de la Poste, 33370 Pompignac, France",
    "33370",
    "564 127 967 45789"
);

var oReilly = new Edition(
    "O'Reilly",
    "Edition",
    new Date(),
    17,
    "Boucansaud, 71300 Marigny, France",
    "71300",
    "466 785 325 47954"
);

var jkRowling = new Ecrivain(
    "J.K Rowling",
    "jk.rowling@gmail.com",
    "Les Aspres",
    [],
    "La Grande Noé, 61270 Les Aspres, France",
    "61270",
    "345 456 765 67890",
    new Date(1966,10,23)
);

var jeanLouis = new Ecrivain(
    "J.L Script",
    "jl.script@gmail.com",
    "Cérilly",
    [],
    "D965, 21330 Cérilly, France",
    "21330",
    "456 543 234 456785",
    new Date(2003,5,3)
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

    jkRowling.ajouterLivre(harryPotter);

var eloquentJavascript = new Livre(
    "Eloquent Javascript",
    "Sunt laborum qui id est in aliquip deserunt ut.",
    24.89,
    oReilly,
    345,
    new Date(),
    [],
    [],
    new Date(2000,6,23),
    [jeanLouis],
    true
    );

    jeanLouis.ajouterLivre(eloquentJavascript);


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
jkRowling.ajouterLivre(eloquentJavascript);
jkRowling.ajouterLivre(eloquentJavascript);
jkRowling.ajouterLivre(eloquentJavascript);
jkRowling.ajouterLivre(eloquentJavascript);
console.log("Age moyen des livres de J.K.R : ",jkRowling.ageMoyenLivres());
console.log("Prix des livres en fr : ",jkRowling.prixLivresFr());

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

jkRowling.modifierPrixLivre(harryPotter,24);
jkRowling.modifierEditionLivre(harryPotter,Gnome);

console.log("Nouveau prix HP : ",harryPotter.$prix);
console.log("Nouvelle edition HP : ",harryPotter.$edition);

jkRowling.donnerCollection(jeanLouis);

console.log("La nouvelle collection de jean louis : ",jeanLouis.$collection);

console.log("Test SIRET J.K.R = ",jkRowling.testSIRET());
console.log("Test SIRET jeanLouis = ",jeanLouis.testSIRET());

console.log("Departement J.K.R = ",jkRowling.extraireDepartement());

console.log("Dob de J.K.R = ",jkRowling.$dateDebutAct);
console.log("J.K.R a 50 ans ? = ",jkRowling.is50y());
