import {Injectable} from '@angular/core';
import {User} from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/app/shared/baseurl';
import * as data from '/Users/HOME/Angular/leetcode/json-server/db.json';
@Injectable()
export class AuthService{
    constructor(private http: HttpClient){}
    currentUser! : User;
    loginUser(user:User):Observable<User>{
        this.currentUser ={
            userName : user.userName,
            password: user.password
        }
        for(let i=0;i<data.user.length;i++){
            if(data.user[i].userName==user.userName)return this.http.get<User>(baseURL + 'user/'+data.user[i].id);
        }
        return this.http.post<User>(baseURL + 'user',user)
    }
    // loginUser(userName:string,password:string){
    //     this.currentUser ={
    //         id : 1,
    //         userName : userName
    //     }
    //     //return this.http.post<User>()

    // }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(userName:string,password:string){
        this.currentUser.userName=userName;
    }
}