import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-four',
  templateUrl: './update-four.component.html',
  styleUrls: ['./update-four.component.css']
})
export class UpdateFourComponent implements OnInit {


  id : number;

  fournisseur : Fournisseur;

  constructor(public fourService: FournisseurService, private router : Router, private  actroute : ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.actroute.snapshot.params['id'];

    this.fourService.getFournisseurById(this.id).subscribe(
      data => {
      this.fournisseur= data;
      })
  }

  updateFournisseur()
  {
    this.fourService.updateFournisseur(this.id, this.fournisseur).subscribe(
      data => 
      {

        if (this.fournisseur.id !=null) {
          Swal.fire({
            title: `fournisseur bien modifié`,
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
