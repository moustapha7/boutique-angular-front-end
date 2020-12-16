import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public urlProduit: string = 'http://localhost:8080/api';

  private baseURL = 'http://localhost:8080/api/produits';


  
  constructor(private httpClient: HttpClient) { }

  //get le nombre de produit

	countProduits() 
	{
		return this.httpClient.get(this.urlProduit+"/nombreProduits");
  }

  //get all produits

	getAllProduits() : Observable<Produit[]>
	{
		return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }

  

  createProduit(produit : Produit): Observable<Object> {
    return this.httpClient.post<Produit[]>(`${this.baseURL}`, produit);
  }

  getProduitById(id : number) : Observable<Produit> {
    return this.httpClient.get<Produit>(`${this.baseURL}/${id}`);
  }

  updateProduit(id:number, produit : Produit): Observable<Object> {
    return this.httpClient.put<Produit[]>(`${this.baseURL}/${id}`, produit);
  }

  deleteProduit(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  

}
