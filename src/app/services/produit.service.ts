import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {  switchMap, switchMapTo } from 'rxjs/operators';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public urlProduit: string = 'http://localhost:8080/api';

  private baseURL = 'http://localhost:8080/api/produits';

  private urlImages = 'http://localhost:8080/api/uploadImage';


  
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

  

  createProduit(produit : Produit, selectedImage?: File): Observable<Produit> {

    let observable = of({});

    if(selectedImage)
    {
      observable = observable.pipe(

      switchMap(() => {

        if(produit.imageUrl)
        {
          return this.httpClient.delete(`http://localhost:8080/images/${produit.imageUrl}`);
        }
        else{

          return of({});

        }
      
      }),
      switchMap(() => {
    
          produit.imageUrl = this.randomStr();
       
        const formData: FormData = new FormData();
        formData.append('pid', produit.imageUrl);
        formData.append('file', selectedImage);
      
          return  this.httpClient.post(`http://localhost:8080/images`, formData, {
            responseType : 'text'
          });
        
        })
      );
     
    }

    return observable.pipe(
      switchMap(() => {
        return this.httpClient.post<Produit>(`${this.urlProduit}`, produit);
      })
    );
  
    
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

  private randomStr()
  {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i<14 ; i++)
    {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }


    return result;

  }
  

}
