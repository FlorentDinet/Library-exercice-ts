import { Livre } from './Livre';

///
/// Ecrivain
///


export class Ecrivain {

    // ATTRIBUTS

    protected id:number;
    protected nom:string;
    protected email: string;
    protected ville:string;
    protected collection: Array<string>;

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
        $collection: Array<string>,
        )
    {
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

	public get $collection(): Array<string> {
		return this.collection;
	}

	public set $collection(value: Array<string>) {
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
			if(livre.$titre && typeof(livre.$titre) == "string"){
				this.collection.push(livre.$titre);
			} else {
				throw "Merci d'entrer un objet Livre valide";			
			}
		}
	}

	/**
	 * supprimer un livre de la collection
	 */
	public supprimerLivre(livre:Livre) {
		if(livre.$titre && typeof(livre.$titre) == "string"){
			this.collection.splice(this.collection.indexOf(livre.$titre),1);
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
	 * Age moyen de ses livres
	 */
	public name() {
		
	}

}