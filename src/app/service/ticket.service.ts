import {Injectable} from '@angular/core';
import {Observable,throwError} from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { baseURL } from 'src/app/shared/baseurl';
@Injectable()
export class TicketService{
    constructor(private http: HttpClient){}  
    //API to fetch tickets
    getTickets(){
        return this.http.get(baseURL + 'tickets').subscribe();
    }
    //API to fetch tickets assignedTo
    getTicketsAssignedTo(id:number){
        return this.http.get(baseURL+'tickets'+id);
    }
    //API to create tickets
    createTickets(){
        return this.http.post(baseURL+'tickets',{
            "buid": "#1234",
            "raisedBy": "mrbean",
            "attachmentInfoDTO":{
                "attachmentPath": "/xyz.com",
                "comment": "post method on ticket works"
            },
            "sceanrioObj": {
                "uuid": "#9999"
            }
        })
    }
}