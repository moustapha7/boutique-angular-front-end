import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListClientComponent } from './boutique/client/list-client/list-client.component';
import { AddClientComponent } from './boutique/client/add-client/add-client.component';
import { AddFourComponent } from './boutique/fournisseur/add-four/add-four.component';
import { ListFourComponent } from './boutique/fournisseur/list-four/list-four.component';
import { ListProduitComponent } from './boutique/produit/list-produit/list-produit.component';
import { AddProduitComponent } from './boutique/produit/add-produit/add-produit.component';
import { AddCategorieComponent } from './boutique/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './boutique/categorie/list-categorie/list-categorie.component';
import { ListUsersComponent } from './utilisateur/list-users/list-users.component';
import { DetailsUsersComponent } from './utilisateur/details-users/details-users.component';
import { UpdateClientComponent } from './boutique/client/update-client/update-client.component';
import { UpdateFourComponent } from './boutique/fournisseur/update-four/update-four.component';
import { UpdateCategorieComponent } from './boutique/categorie/update-categorie/update-categorie.component';
import { UpdateProduitComponent } from './boutique/produit/update-produit/update-produit.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { DetailProduitComponent } from './boutique/produit/detail-produit/detail-produit.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  
  { path: 'register-client', component: RegisterClientComponent},
          
  
  { path: 'list-client', component: ListClientComponent },
  {path: 'update-client/:id', component: UpdateClientComponent},
  { path: 'add-client', component: AddClientComponent },
  

  { path: 'list-four', component: ListFourComponent },
  {path: 'update-four/:id', component: UpdateFourComponent},
  { path: 'add-four', component: AddFourComponent },
  

  { path: 'list-produit', component: ListProduitComponent },
  {path: 'update-produit/:id', component: UpdateProduitComponent},
  { path: 'add-produit', component: AddProduitComponent },
  {path: 'details-produit/:id', component: DetailProduitComponent},
  

  { path: 'add-categorie', component: AddCategorieComponent },
  {path: 'update-categorie/:id', component: UpdateCategorieComponent},
  { path: 'list-categorie', component: ListCategorieComponent },


  { path: 'list-users', component: ListUsersComponent },
  { path: 'details-user/:id', component: DetailsUsersComponent },



  { path: '', redirectTo: 'login', pathMatch: 'full' },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
