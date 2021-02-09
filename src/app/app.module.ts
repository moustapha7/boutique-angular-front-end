import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsersComponent } from './utilisateur/list-users/list-users.component';
import { ListClientComponent } from './boutique/client/list-client/list-client.component';
import { AddClientComponent } from './boutique/client/add-client/add-client.component';
import { AddFourComponent } from './boutique/fournisseur/add-four/add-four.component';
import { ListFourComponent } from './boutique/fournisseur/list-four/list-four.component';
import { ListProduitComponent } from './boutique/produit/list-produit/list-produit.component';
import { AddProduitComponent } from './boutique/produit/add-produit/add-produit.component';
import { AddCategorieComponent } from './boutique/categorie/add-categorie/add-categorie.component';
import { ListCategorieComponent } from './boutique/categorie/list-categorie/list-categorie.component';
import { DetailsUsersComponent } from './utilisateur/details-users/details-users.component';
import { UpdateProduitComponent } from './boutique/produit/update-produit/update-produit.component';
import { UpdateCategorieComponent } from './boutique/categorie/update-categorie/update-categorie.component';
import { UpdateClientComponent } from './boutique/client/update-client/update-client.component';
import { UpdateFourComponent } from './boutique/fournisseur/update-four/update-four.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { DetailProduitComponent } from './boutique/produit/detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DashboardComponent,
    ListClientComponent,
    AddClientComponent,
    AddFourComponent,
    ListFourComponent,
    ListProduitComponent,
    AddProduitComponent,
    AddCategorieComponent,
    ListCategorieComponent,
    ListUsersComponent,
    DetailsUsersComponent,
    UpdateProduitComponent,
    UpdateCategorieComponent,
    UpdateClientComponent,
    UpdateFourComponent,

    RegisterClientComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
