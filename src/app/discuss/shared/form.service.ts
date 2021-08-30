import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Observable,throwError} from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {form} from './form.model'
import { baseURL } from 'src/app/shared/baseurl';
import { catchError } from 'rxjs/operators';
import {User} from '/Users/HOME/Angular/leetcode/src/app/user/user.model';
import * as data from '/Users/HOME/Angular/leetcode/json-server/db.json';
@Injectable()
export class FormService{
    constructor(private http: HttpClient){}
    getForms():Observable<form[]>{
        return this.http.get<form[]>(baseURL + 'discuss');
    }
    getForm(id:number){

    }
    addForm(form : form):Observable<form>{
        return this.http.post<form>(baseURL + 'discuss',form);
    }
    deleteForm(id:number){
        return this.http.delete(baseURL+'discuss/'+id);
    }
    getProfile(username:string):Observable<User>{
        let id
        for(let i=0;i<data.user.length;i++){
            if(data.user[i].userName==username)id = data.user[i].id
        }     
        return this.http.get<User>(baseURL+'user/'+id);
    }
}
    // private handleError(error: HttpErrorResponse | any) {
    //     if (error.status === 0) {
    //         // A client-side or network error occurred. Handle it accordingly.
    //         console.error('An error occurred:', error.error);
    //     } else {
    //         // The backend returned an unsuccessful response code.
    //         // The response body may contain clues as to what went wrong.
    //         console.error(
    //           `Backend returned code ${error.status}, ` +
    //           `body was: ${error.error}`);
    //     }
    //       // Return an observable with a user-facing error message.
    //     return Observable.throw('Something bad happened; please try again later.');
    // }

