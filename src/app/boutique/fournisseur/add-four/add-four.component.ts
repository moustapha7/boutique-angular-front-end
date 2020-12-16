import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-four',
  templateUrl: './add-four.component.html',
  styleUrls: ['./add-four.component.css']
})
export class AddFourComponent implements OnInit {

  fournisseur : Fournisseur = new Fournisseur();

  constructor(public fourService: FournisseurService, private router : Router) { }

  ngOnInit(): void {
  }

  saveFournisseur()
  {
    this.fourService.createFournisseur(this.fournisseur).subscribe(
      result =>
      {
      
        if (this.fournisseur.id > 0) {
          Swal.fire({
            title: `fournisseur bien ajouté`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })

        }
        this.router.navigate(['list-four']);
      }
    )
    

  }



}
