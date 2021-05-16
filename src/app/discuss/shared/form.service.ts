import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Iform} from './form.model';
 
@Injectable()
export class FormService{
    getForms(){

    }
    getForm(id:number){

    }
}
const FORMS: Iform[] = [
    {
        id:1,
        title: 'Welcome to leetcode',
        time: '10:00 AM',
        description: 'Here is our first form. How did you like?',
        votes: 5 
    }
]