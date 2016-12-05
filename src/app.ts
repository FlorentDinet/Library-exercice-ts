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
    "Edititeur de livres pour enfant",
    new Date(),
    15
);
var jkRowling = new Ecrivain(
    "J.K Rowling",
    "jk.rowling@gmail.com",
    "London",
    ["harryPotter"]
);

var harryPotter = new Livre(
    "Harry Potter",
    "Exercitation laboris in sunt voluptate in laboris dolor est duis commodo veniam elit consectetur irure.",
    16,
    editionGriffon,
    657,
    new Date(),
    [""],
    [],
    new Date(2013,6,23),
    [jkRowling],
    true
    );
