import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorie : Categorie = new Categorie();

  constructor(public categorieService: CategorieService,  private router: Router) { }

  ngOnInit(): void {
    
  }

  saveCategorie()
  {
    this.categorieService.createCategorie(this.categorie).subscribe(
      result =>
      {
      
        if (this.categorie.id > 0) {
          Swal.fire({
            title: `categorie bien ajouté`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })

        }
        this.router.navigate(['list-categorie']);
      }
    )
    

  }
 
}