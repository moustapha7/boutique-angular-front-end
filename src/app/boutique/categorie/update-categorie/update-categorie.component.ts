import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  categorie : Categorie;

  id : number;

  constructor(  private router: Router,  private categorieService : CategorieService,   private  actroute : ActivatedRoute) { }


  ngOnInit(): void {

    this.id = this.actroute.snapshot.params['id'];

    this.categorieService.getCategorieById(this.id).subscribe(
      data => {
      this.categorie= data;
      })
    
  }

  updateCategorie()
  {
    this.categorieService.updateCategorie(this.id, this.categorie).subscribe(
      data => 
      {

        if (this.categorie.id !=null) {
          Swal.fire({
            title: `categorie bien modifié`,
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
