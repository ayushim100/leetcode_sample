import { Component, Input, OnInit } from '@angular/core';
import {Iform} from './shared/form.model'
import { FormService } from './shared/form.service';


@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
  title:any
  description:any
  form1!: any[];
  constructor(private formService: FormService) {
    
   }

  ngOnInit(){
    this.form1 = this.formService.getForms()
  }
  submit(formValues:any){
    this.form1.push(formValues)
    console.log(formValues)
  }
}
