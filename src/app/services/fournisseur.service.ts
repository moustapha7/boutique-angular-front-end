import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  public urlFour: string = 'http://localhost:8080/api';

  private baseURL = 'http://localhost:8080/api/fournisseurs';


  
  constructor(private httpClient: HttpClient) { }

  //get le nombre de fournisseur

	countFours()
	{
		return this.httpClient.get(this.urlFour+"/nombreFournisseurs");
  }

  getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.httpClient.get<Fournisseur[]>(`${this.baseURL}`);
  }

  createFournisseur(fournisseur : Fournisseur): Observable<Object> {
    return this.httpClient.post<Fournisseur[]>(`${this.baseURL}`, fournisseur);
  }

  getFournisseurById(id : number) : Observable<Fournisseur> {
    return this.httpClient.get<Fournisseur>(`${this.baseURL}/${id}`);
  }

  updateFournisseur(id:number, fournisseur : Fournisseur): Observable<Object> {
    return this.httpClient.put<Fournisseur[]>(`${this.baseURL}/${id}`, fournisseur);
  }

  deleteFournisseur(id : number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
