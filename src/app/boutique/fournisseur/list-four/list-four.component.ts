import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-four',
  templateUrl: './list-four.component.html',
  styleUrls: ['./list-four.component.css']
})
export class ListFourComponent implements OnInit {

  fournisseur : Fournisseur;
  fournisseurs : Fournisseur[];

  constructor(public fourService: FournisseurService, private router : Router) { }

  ngOnInit(): void {
    this.listFournisseurss();
  }

  listFournisseurss()
  {
    this.fourService.getAllFournisseurs().subscribe(
      result => {
        this.fournisseurs = result;
      }
    )
    
  }



  updateFournisseur(id : number)  {
 
    this.router.navigate(['update-four', id]);
  }

  deleteFournisseur(id :number) 
  {
    Swal.fire({
      title: `Voulez vous supprimer ce fournisseur  ?`,
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
        this.fourService.deleteFournisseur(id).subscribe( data => {
          console.log(data);
          
          Swal.fire(
            'Deleted!',
            'fournisseur bien supprimé.',
            'success'
          )

          this.listFournisseurss();
        })

      }
    })

   
  }

}