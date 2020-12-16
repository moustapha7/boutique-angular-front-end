import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';



const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public urlUser: string = 'http://localhost:8080/api';


  
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }



  //get all users

	getAllUsers()
	{
		return this.http.get(this.urlUser+"/listUsers");
	}

	//get le nombre de users

	countUsers()
	{
		return this.http.get(this.urlUser+"/nombreUsers");
  }
  
  //user by id
  getUserById(id : number) : Observable<User> {
    return this.http.get<User>(`${this.urlUser}/users/${id}`);
  }

  /* getEmployeeById(id : number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  } */




}
