import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { Produit } from 'src/app/model/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  id :number;
  produit : Produit = new Produit() ;

  constructor( private router :Router,  private  actroute : ActivatedRoute, private produitService : ProduitService
   ) { }

  ngOnInit(): void {

    
    this.id = this.actroute.snapshot.params['id'];

    this.produitService.getProduitById(this.id).subscribe(
      data => {
      this.produit= data;
      })
  }


}