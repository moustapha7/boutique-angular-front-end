import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users;
  currentUser: any;
  isLoggedIn = true;

  showAdminBoard = false;
  showModeratorBoard = false;
  showUserBoard = false;

  private roles: string[];

  username: string;
  loggedUser : string;

  constructor( private userService: UserService, private routes :Router, private token: TokenStorageService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.listUsers();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showUserBoard = this.roles.includes('ROLE_USER');


      this.username = user.username;
      
    }

    
  }

  listUsers()
	{
		this.userService.getAllUsers().subscribe(
			data => {
				this.users= data;
			}
		)
  }
  
  userDetails(id :number)
	{
    this.routes.navigate(['details-user',id]);
	}

}
