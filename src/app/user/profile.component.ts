import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  constructor(public authService: AuthService,private router:Router) { }
  
  ngOnInit(){
    if(!this.authService.currentUser)this.router.navigate(['user/login']);
    else{
      let userName  = new FormControl(this.authService.currentUser.userName)
      let password = new FormControl(this.authService.currentUser.password)
      this.profileForm = new FormGroup({
        userName : userName,
        password : password
      })
    }
  }
  saveProfile(formValues:any){
    this.authService.updateCurrentUser(formValues.userName, formValues.password)
  }

}
