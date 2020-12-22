import { Component, OnInit } from '@angular/core';
import { SignUpInfo } from '../model/sign-up-info';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  signupInfo:SignUpInfo;

  isLoggedIn = true;

  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  onSubmit(): void {

    this.signupInfo = new SignUpInfo(this.form.name,
  		this.form.username,
  		this.form.email,
      this.form.password);
      
    this.authService.register(this.signupInfo).subscribe(
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