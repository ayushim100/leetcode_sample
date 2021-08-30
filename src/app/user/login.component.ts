import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router}  from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:any;
  password:any;
  constructor(private authService:AuthService ,private router: Router) { }

  ngOnInit(): void {
  }
  
  login(formValues:any){
    this.authService.loginUser(formValues).subscribe();
    //this.authService.loginUser(formValues.userName,formValues.password);
    this.router.navigate(['cards']);
  }
}
