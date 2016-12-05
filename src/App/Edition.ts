import { Livre } from './Livre';

///
/// Edition
///


export class Edition {

    // ATTRIBUTS

    protected id:number;
    protected nom:string;
    protected activite: string;
    protected dateCreation: Date;
    protected note: number;
    protected static compteur:number = 1;

    // CONSTRUCTEUR

	constructor(
        $nom: string,
        $activite: string,
        $dateCreation: Date = new Date(),
        $note: number
        )
    {
		this.id = Edition.compteur;
		this.nom = $nom;
		this.activite = $activite;
		this.dateCreation = $dateCreation;
		this.note = $note;

        Edition.compteur++;
	}

    // GETTERS & SETTERS

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

	public get $activite(): string {
		return this.activite;
	}

	public set $activite(value: string) {
		this.activite = value;
	}

	public get $dateCreation(): Date {
		return this.dateCreation;
	}

	public set $dateCreation(value: Date) {
		this.dateCreation = value;
	}

	public get $note(): number {
		return this.note;
	}

	public set $note(value: number) {
		this.note = value;
	}
    

}