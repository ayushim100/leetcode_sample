import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { FormService } from './shared/form.service';
import {form} from './shared/form.model';
import {FORMS} from './shared/forms';
@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
  title:any
  description: any
  @Input() formValues!: form ;

  form1!: any[];
  constructor(private formService: FormService) {
   }

  ngOnInit(){
    this.form1 = this.formService.getForms()
  }
  ngOnChanges(formValues:any){
    console.log(this.formValues)
  }
  
}
