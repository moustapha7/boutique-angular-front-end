import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  produit: Produit;
  produits : Produit[];
  categorie: Categorie = new Categorie();
   categories: Categorie[];
   selectedCategorie : Categorie;


  constructor(private produitService :ProduitService, private router : Router, 
    private categService: CategorieService) { }

  ngOnInit(): void {
    this.listProduits();
    this.getAllCategories();

  }

  listProduits()
  {
    this.produitService.getAllProduits().subscribe(
      data => {
        this.produits = data;
      }
    )
  }

  getAllCategories() {
    this.categories = [];
  this.categService.getAllCategories().subscribe(
    result => {
      this.categories = result;
    })
  }

  updateProduit(id : number, prod)
  {

    this.router.navigate(['update-produit', id]);
  }


  deleteProduit(id :number)
  {

    Swal.fire({
      title: `Voulez vous supprimer ce produit  ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => 
    {
      if (result.isConfirmed)
      {
        this.produitService.deleteProduit(id).subscribe( data => {
          console.log(data);
          
          Swal.fire(
            'Deleted!',
            'produit bien supprimé.',
            'success'
          )

          this.listProduits();
        })

      }
    })


  }

}
