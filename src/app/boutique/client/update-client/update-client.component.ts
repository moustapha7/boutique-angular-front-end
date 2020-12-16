import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {


  id : number;

  client : Client;

  constructor( private router: Router,  private clientService : ClientService,   private  actroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actroute.snapshot.params['id'];

    this.clientService.getClientById(this.id).subscribe(
      data => {
      this.client= data;
      })
  }

  updateClient()
  {
    this.clientService.updateClient(this.id, this.client).subscribe(
      data => 
      {

        if (this.client.id !=null) {
          Swal.fire({
            title: `client bien modifié`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })
        
        }

      this.router.navigate(['list-client']);
      }
     )

  }


}
