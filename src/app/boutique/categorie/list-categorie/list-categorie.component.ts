import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categorie : Categorie ;
  categories : Categorie[];

  public isOk: boolean;

  constructor(public categorieService: CategorieService,  private router : Router) { }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories()
  {
    this.categorieService.getAllCategories().subscribe(
      result => {
        this.categories = result;
      }
    )
    
  }


  updateCategorie(id : number)  {
 
    this.router.navigate(['update-categorie', id]);
  }

  deleteCategorie(id :number) 
  {
    Swal.fire({
      title: `Voulez vous supprimer ce categorie  ?`,
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
        this.categorieService.deleteCategorie(id).subscribe( data => {
          console.log(data);
          
          Swal.fire(
            'Deleted!',
            'categorie bien supprimé.',
            'success'
          )

          this.listCategories();
        })

      }
    })

   
  }



 
}
