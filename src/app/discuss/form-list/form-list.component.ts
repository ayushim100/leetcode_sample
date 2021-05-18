import { Component, Input, OnInit } from '@angular/core';

import { FormService } from '../shared/form.service';
import {form} from '../shared/form.model';
import {FORMS} from '../shared/forms';
@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})

export class FormListComponent implements OnInit {
  title!: any
  description!: any 
  filledForm! : form
  form1!: form[];
  
  constructor(private formService: FormService) {}

  ngOnInit() {
    this.form1 = this.formService.getForms()
  }
  submit(formValues:any){
    //this.saveNewForm.emit(formValues) //after submitting box gayab
    this.filledForm = formValues
    this.form1.push(formValues)
    
  }
}
