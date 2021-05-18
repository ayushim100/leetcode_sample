import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {form} from './form.model'
import {FORMS} from './forms';
 
@Injectable()
export class FormService{
    forms: form[] = FORMS
    getForms(){
        return this.forms
    }
    getForm(id:number){

    }
}
