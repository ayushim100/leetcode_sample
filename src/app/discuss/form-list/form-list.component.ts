import { Component, Input, OnInit,Inject } from '@angular/core';

import { FormService } from '../shared/form.service';
import {form} from '../shared/form.model';
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
  
  constructor(private formService: FormService, @Inject('BaseURL') private BaseURL:string) {}

  ngOnInit() {
    this.formService.getForms().subscribe((form)=>this.form1=form); 
  }
  submit(formValues:form){
    var today = new Date();
    formValues.time = today.getHours() + ":" + today.getMinutes();
    this.filledForm = formValues
    this.formService.addForm(this.filledForm).subscribe(form=>this.form1.push(form));
    //this.form1.push(formValues)
    //this.saveNewForm.emit(formValues) //after submitting box gayab
  }
}
