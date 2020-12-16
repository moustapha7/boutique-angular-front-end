import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {


  produit : Produit = new Produit() ;
  produits : Produit[];

  categorie: Categorie = new Categorie();
   categories: Categorie[];
   selectedCategorie : Categorie;

  id :number;

  constructor( private router :Router,  private  actroute : ActivatedRoute, private produitService : ProduitService,
    private categService: CategorieService) { }

  ngOnInit(): void {

    this.getAllCategories();
    
    this.id = this.actroute.snapshot.params['id'];

    this.produitService.getProduitById(this.id).subscribe(
      data => {
      this.produit= data;
      })
  }


  updateProduit()
  { 
    this.produit.categorie = this.selectedCategorie;


    this.produitService.updateProduit(this.id, this.produit).subscribe(
      data => 
      {
        
        if (this.produit.id !=null) {
          Swal.fire({
            title: `produit bien modifié`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        
        }
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
