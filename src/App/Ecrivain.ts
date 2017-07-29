import { Livre } from './Livre';
import { Edition } from './Edition';
import { Metadata } from './Metadata';

///
/// Ecrivain
///


export class Ecrivain extends Metadata {

    // ATTRIBUTS

    protected id:number;
    protected nom:string;
    protected email: string;
    protected ville:string;
    protected collection: Array<Livre>;

	// ATTRIBUTS STATIQUES

    protected static moyenneNote:number;
    protected static compteur:number = 1;

	// CONSTANTES

	protected readonly livresMax = 10;

    // CONSTRUCTEUR

    constructor(
        $nom: string,
        $email: string,
        $ville: string,
        $collection: Array<Livre> = [],
		$adresse: string,
        $codePostal: string,
        $numSiret: string,
        $dateDebutAct: Date = new Date(),
        $pays: string = "France",
        $date: Date = new Date(),
        $latLong: Array <number> = []
        )
    {
		super($adresse,$codePostal,$numSiret,$dateDebutAct);
		this.id = Ecrivain.compteur;
		this.nom = $nom;
		this.email = $email;
		this.ville = $ville;
		this.collection = $collection;

        Ecrivain.compteur++;
	}
    
    // GETTERS SETTERS

	public get $id(): number {
		return this.id;
	}

	public set $id(value: number) {
		this.id = value;
	}

	public get $nom(): string {
		return this.nom;
	}

	public set $nom(value: string) {
		this.nom = value;
	}

	public get $email(): string {
		return this.email;
	}

	public set $email(value: string) {
		this.email = value;
	}

	public get $ville(): string {
		return this.ville;
	}

	public set $ville(value: string) {
		this.ville = value;
	}

	public get $collection(): Array<Livre> {
		return this.collection;
	}

	public set $collection(value: Array<Livre>) {
		this.collection = value;
	}
    
    // METHODES

	/**
	 * ajouter un livre dans la collection
	 */
	public ajouterLivre(livre:Livre) {
		if(this.collection.length>=this.livresMax) {
			throw "Nombre de livre maximum atteint";
		} else {
			if(livre){
				this.collection.push(livre);
			} else {
				throw "Merci d'entrer un objet Livre valide";			
			}
		}
	}

	/**
	 * supprimer un livre de la collection
	 */
	public supprimerLivre(livre:Livre) {
		if(livre){
			this.collection.splice(this.collection.indexOf(livre),1);
		} else {
			throw "Merci d'entrer un objet Livre valide";			
		}
	}

	/**
	 * test email
	 */
	public testEmail() {
		let emailRegeX = /^[a-z0-9\-\.\_]+\@[a-z]+(.com|.fr|.net)$/;
        return emailRegeX.test(this.email);
	}

	/**
	 * Retirer de la vente un ou plusieurs livres
	 */
	public retirerVente(livres: Array <Livre>) {
		livres.forEach(livre => {
			livre.$dispoVente = false;
		});
	}

	/**
	 * Age moyen de livres
	 */
	public ageMoyenLivres() {
		let ages:Array <number> = [];
		this.collection.forEach(livre => {
			ages.push(livre.calculerAgeLivre());
		});
		let total = ages.reduce(function(a, b) {
            return a + b;
        }, 0);
		return (total/ages.length).toFixed(2);
	}

	/**
	 * prix des livres en fr
	 */
	public prixLivresFr() {
		let prix:Array <string> =[];
		this.collection.forEach(livre => {
			prix.push(livre.formatterPrix());
		});
		return prix;
	}

	/**
	 * modifier le prix
	 */
	public modifierPrixLivre(livre:Livre,prix:number) {
		let livreAmodifier = this.collection[this.collection.indexOf(livre)];
		
		livreAmodifier.$prix=prix;
		livreAmodifier.$dateModified= new Date();
	}
	
	/**
	 * modifier le prix
	 */
	public modifierEditionLivre(livre:Livre,edition:Edition) {
		let livreAmodifier = this.collection[this.collection.indexOf(livre)];
		
		livreAmodifier.$edition=edition;
		livreAmodifier.$dateModified= new Date();
	}

	/**
	 * Donner sa collection
	 */
	public donnerCollection(ecrivain:Ecrivain) {
		let collectionDuDestinataire = ecrivain.$collection;
		ecrivain.$collection = ecrivain.$collection.concat(this.collection);
	}

}