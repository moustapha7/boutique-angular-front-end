import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public urlUser: string = 'http://localhost:8080/api';

  public baseURL = 'http://localhost:8080/api/categories';


  
  constructor(private httpClient: HttpClient) { }

  //get le nombre de categories

	countCategories()
	{
		return this.httpClient.get(this.urlUser+"/nombreCategories");
  }

  getAllCategories(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${this.baseURL}`);
  }

  createCategorie(categorie : Categorie): Observable<Object> {
    return this.httpClient.post<Categorie[]>(`${this.baseURL}`, categorie);
  }

  getCategorieById(id : number) : Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${this.baseURL}/${id}`);
  }

  updateCategorie(id:number, categorie : Categorie): Observable<Object> {
    return this.httpClient.put<Categorie[]>(`${this.baseURL}/${id}`, categorie);
  }

  deleteCategorie(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }



}
