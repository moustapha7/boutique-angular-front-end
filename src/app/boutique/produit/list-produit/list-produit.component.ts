import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
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
   isLoggedIn = true;

   private roles: string[];
   showAdminBoard = false;
   showModeratorBoard = false;
   showUserBoard = false;
   showClientBoard = false;
   username: string;

  constructor(private produitService :ProduitService, private router : Router, private tokenStorageService: TokenStorageService,
    private categService: CategorieService) { }

  ngOnInit(): void {
    this.listProduits();
    this.getAllCategories();

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showClientBoard = this.roles.includes('ROLE_CLIENT');


      this.username = user.username;
      
    }

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



  produitDetails(id :number)
	{
    this.router.navigate(['details-produit',id]);
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