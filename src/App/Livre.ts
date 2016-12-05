import * as moment from '../../bower_components/moment/moment';
import { Ecrivain } from './Ecrivain';
import { Edition } from './Edition';

///
/// Livre
///


export class Livre {

    // ATTRIBUTS

    protected id: number;
    protected titre: string;
    protected resume: string;
    protected prix: number;
    protected edition: Edition;
    protected nbPag: number;
    protected dateModified : Date;
    protected commentaires : Array <string>;
    protected notes : Array <number>;
    protected dateRedac: Date;
    protected ecrivains: Array < Ecrivain > ;
    protected dispoVente: boolean;
    protected static nbLivre: number = 1;
    protected static prixMoyen: Array <number> = [];

    // CONSTRUCTEUR

    constructor(
        titre:string,
        resume:string,
        prix:number,
        edition:Edition = null,
        nbPag:number,
        dateModified: Date = new Date(),
        commentaires : Array <string> = [],
        notes : Array <number> = [],
        dateRedac:Date,
        ecrivains:Array <Ecrivain>,
        dispoVente:boolean = false,
    ) {
        this.id = Livre.nbLivre;
        this.$titre = titre;
        this.resume = resume;
        this.prix = prix;
        this.edition = edition;
        this.nbPag = nbPag;
        this.dateModified = dateModified;
        this.commentaires = commentaires;
        this.notes = notes;
        this.dateRedac = dateRedac;
        this.ecrivains = ecrivains;
        this.dispoVente = dispoVente;

        Livre.nbLivre ++;
        Livre.prixMoyen.push(prix);
        console.log(Livre.prixMoyen);
        console.log(this.dateModified);
         
    }
    
    // GETTERS SETTERS

    public get $id(): number {
        return this.id;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public get $titre(): string {
        return this.titre;
    }

    public set $titre(value: string) {
        if(value && value.length<5) {
            throw "Le titre doit comporter au moins 5 caractères";
        } else {
        this.titre = value;
        }
    }

    public get $resume(): string {
        return this.resume;
    }

    public set $resume(value: string) {
        if(value && value.length<10) {
            throw "Le résumé doit comporter au moins 10 caractères";
        } else {
        this.resume = value;
        }
    }

    public get $prix(): number {
        return this.prix;
    }

    public set $prix(value: number) {
        this.prix = value;
    }

    public get $edition(): Edition {
        return this.edition;
    }

    public set $edition(value: Edition) {
        this.edition = value;
    }

    public get $nbPag(): number {
        return this.nbPag;
    }

    public set $nbPag(value: number) {
        this.nbPag = value;
    }

    public get $dateRedac(): Date {
        return this.dateRedac;
    }

    public set $dateRedac(value: Date) {
        this.dateRedac = value;
    }

    public get $ecrivains(): Array < Ecrivain > {
        return this.ecrivains;
    }

    public set $ecrivains(value: Array < Ecrivain > ) {
        this.ecrivains = value;
    }

    public get $dispoVente(): boolean {
        return this.dispoVente;
    }

    public set $dispoVente(value: boolean) {
        this.dispoVente = value;
    }
    
    public get $prixMoyen(): Array <number> {
        return Livre.prixMoyen;
    }

    public set $prixMoyen(value: Array <number>) {
        Livre.prixMoyen = value;
    }
    

    // MÉTHODES

    /**
     * formatter le titre les espaces remplacer par des tirets et juste la 1ere lettre en majuscule
     */
    public formatterTitre() {
        if(this.titre != null && typeof this.titre == "string" ) {
        let re = / /g;
        this.titre = this.titre.toLowerCase();
        this.titre = this.titre.charAt(0).toUpperCase() + this.titre.slice(1);
        this.titre = this.titre.replace(re, "-");
        return this.titre;
        }
    }

    /**
     * afficher le titre, le résumé
     */
    public afficherTitreResume() {
        
    }

    /**
     * calculer l'age du livre à parti de sa date de création
     */
    public calculerAgeLivre() {
        let dob = this.dateRedac;
        let now = new Date();
        let diff = now.valueOf()-dob.valueOf();
        let test = moment.duration(diff, 'ms');
/*        console.log(test.years(),test.days());*/
        return moment([2013, 6, 25]).fromNow(true);

    }

    /**
     * dit si oui ou non ce livre a été écris entre 1970 et aujourd'hui
     */
    public isOlderThan1970() {
        if (this.dateRedac.getTime()<=0){
            return true;
        } else {
            return false;
        }
    }

    /**
     * formatterPrix
     */
    public formatterPrix() {
        let prix = String(this.$prix);
        prix = prix.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
        if (!(prix.indexOf("€") >= 0)) {
                prix = prix + " €";
        }
        return prix;
    }

    // MÉTHODE STATIQUE

    /**
     * stocker le prix moyen des livre crée
     */
    public static calculerPrixMoyen():number {
        let total = Livre.prixMoyen.reduce(function(a, b) {
            return a + b;
        }, 0);
        return total/Livre.prixMoyen.length;
    }









}