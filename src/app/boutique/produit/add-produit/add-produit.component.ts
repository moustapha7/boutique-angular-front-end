import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  produit : Produit = new Produit() ;
  produits : Produit[];

  categorie: Categorie = new Categorie();
   categories: Categorie[];
   selectedCategorie : Categorie;

   selectedImage : File;

  constructor( private router : Router, private categService: CategorieService, private produitService : ProduitService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  onFileChanged(event : Event)
  {
    this.selectedImage =(event.target as HTMLInputElement).files[0];
  }

  saveProduit()
  {


      this.produit.categorie = this.selectedCategorie;
      this.produitService.createProduit(this.produit, this.selectedImage).subscribe(
        result => {
          console.log(result);
        }
      )
    
    this.router.navigate(['list-produit']);

  }

  getAllCategories() {
    this.categories = [];
  this.categService.getAllCategories().subscribe(
    result => {
      this.categories = result;
    })
  }

}
