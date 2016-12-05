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
    protected static moyenneNote:number;
    protected static compteur:number = 1;

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

}