import { Categorie } from './categorie';


export class Produit {

    id: number;
    code: string;
    libelle: string;
    prixUnitaire : number;
    categorie : Categorie;
    imageUrl :string;

}
