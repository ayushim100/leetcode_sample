import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Iform} from './form.model';
 
@Injectable()
export class FormService{
    getForms(){
        return FORMS
    }
    getForm(id:number){

    }
}
const FORMS = [
    {
        id:1,
        title: 'Welcome to leetcode',
        time: '10:00 AM',
        description: 'Here is our first form. How did you like?',
        votes: 5 
    },
    {
        id:2,
        title: 'Second Form',
        time: '4:00 PM',
        description: 'Here is our second form. Hope you enjoy it.',
        votes: 10
    }
]