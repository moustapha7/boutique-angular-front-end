import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CategorieService } from '../services/categorie.service';
import { ClientService } from '../services/client.service';
import { FournisseurService } from '../services/fournisseur.service';
import { ProduitService } from '../services/produit.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 private roles: string[];
  isLoggedIn = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;
  showClientBoard = false;
  username: string;

  currentUser: any;
  info: any;

  nbreUsers;
  nbreClients;
  nbreCategories
  nbreProduits;
  nbreFournisseurs;

  loggedUser : string;

  constructor(private tokenStorageService: TokenStorageService, private token: TokenStorageService, private userService :UserService,
                           private clienService : ClientService, private categService : CategorieService,  private authService :AuthService,
                                   private fourService : FournisseurService, private produitService:ProduitService) { }

  ngOnInit(): void {
    this.nombreUsers();
    this.nombreCategories();
    this.nombreClients();
    this.nombreFournisseurs();
    this.nombreProduits();

    this.currentUser = this.token.getUser();
  
  


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

  loggedIn()
  {
    
    this.loggedUser = localStorage.getItem('token');
    console.log(this.loggedUser);
    return this.loggedUser;
   
  }



  nombreUsers()
  {
    this.userService.countUsers().subscribe(
      data => {
        this.nbreUsers = data;
         
      }
    );
  }

  nombreClients()
  {
    this.clienService.countClients().subscribe(
      data => {
        this.nbreClients = data;
         
      }
    );
  }

  nombreCategories()
  {
    this.categService.countCategories().subscribe(
      data => {
        this.nbreCategories = data;
      }
    );
  }

  nombreProduits()
  {
    this.produitService.countProduits().subscribe(
      data => {
        this.nbreProduits = data;
         
      }
    );
  }

  nombreFournisseurs()
  {
    this.fourService.countFours().subscribe(
      data => {
        this.nbreFournisseurs = data;
      
      }
    );
  }



  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}