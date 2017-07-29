import * as moment from '../../bower_components/moment/moment';

///
/// Metadata
///


export class Metadata {

    // ATTRIBUTS

    private adresse:string;
    private codePostal:string;
    private numSiret:string;
    private pays:string;
    private date:Date;
    private dateDebutAct:Date;
    private latLong:Array <number>;

    // CONSTRUCTEUR

	constructor(
        $adresse: string,
        $codePostal: string,
        $numSiret: string,
        $dateDebutAct: Date = new Date(),
        $pays: string = "France",
        $date: Date = new Date(),
        $latLong: Array <number> = []
        ) 
    {
		this.adresse = $adresse;
		this.codePostal = $codePostal;
		this.numSiret = $numSiret;
		this.pays = $pays;
		this.date = $date;
		this.dateDebutAct = $dateDebutAct;
		this.latLong = $latLong;
	}
    
    // GETTERS SETTERS


	public get $adresse(): string {
		return this.adresse;
	}

	public set $adresse(value: string) {
		this.adresse = value;
	}

	public get $codePostal(): string {
		return this.codePostal;
	}

	public set $codePostal(value: string) {
		this.codePostal = value;
	}

	public get $pays(): string {
		return this.pays;
	}

	public set $pays(value: string) {
		this.pays = value;
	}

	public get $date(): Date {
		return this.date;
	}

	public set $date(value: Date) {
		this.date = value;
	}

	public get $numSiret(): string {
		return this.numSiret;
	}

	public set $numSiret(value: string) {
		this.numSiret = value;
	}

	public get $dateDebutAct(): Date {
		return this.dateDebutAct;
	}

	public set $dateDebutAct(value: Date) {
		this.dateDebutAct = value;
	}

	public get $latLong(): Array <number> {
		return this.latLong;
	}

	public set $latLong(value: Array <number>) {
		this.latLong = value;
	}

    // METHODES

    /**
	 * test SIRET
	 */
	public testSIRET() {
		let siretRegeX = /^[0-9]{3}\ [0-9]{3}\ [0-9]{3}\ [0-9]{5}$/;
        return siretRegeX.test(this.numSiret);
	}

    /**
     * Extraire le département
     */
    public extraireDepartement() {
        // On test le cp avant tout
        let cpRegeX = /^[0-9]{5}$/;
        if(cpRegeX.test(this.codePostal)) {
            return this.codePostal.substr(0,2);
        } else {
            throw "Le CP n'est pas de format XXXXX chiffres";
            
        }
    }

    /**
     * test si 50 ans
     */
    public is50y() {
        let dob = this.dateDebutAct;
        let now = new Date();
        let diff = now.valueOf()-dob.valueOf();
        let test = moment.duration(diff, 'ms').years();
/*        let test = moment().diff(this.dateDebutAct, 'years', true);*/
        if(test == 50) {
            return "true : " + test;
        } else {
            return "false : " + test;
        }
    }
    
}
