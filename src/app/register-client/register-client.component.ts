import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../model/sign-up-info';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  signupInfo:SignUpInfo;

  isLoggedIn = true;


  constructor(private authService: AuthService , private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }


  registerClient(): void {

    this.signupInfo = new SignUpInfo(this.form.name,
  		this.form.username,
  		this.form.email,
      this.form.password);
      
    this.authService.registerClient(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}