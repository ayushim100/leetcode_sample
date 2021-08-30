import { Component, Input, OnInit, OnChanges, Inject} from '@angular/core';
import { FormService } from './shared/form.service';
import {form} from './shared/form.model';
import {AuthService} from '../user/auth.service';
@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
  title:any
  description: any
  selectedUser: any
  @Input() formValues!: form ;

  form1!: any[];
  constructor(@Inject('BaseURL') private BaseURL:string,private formService: FormService, private auth:AuthService) {}
  deleteForm(id:number){
    this.formService.deleteForm(id).subscribe();
    this.formService.getForms().subscribe((form)=>this.form1=form);
  }
  getProfile(username:string){
    this.formService.getProfile(username).subscribe((user)=>this.selectedUser=user);
  }
  ngOnInit(){
    this.formService.getForms().subscribe((form)=>this.form1=form);
  }
  // ngOnChanges(formValues:any){
  //   this.formService.getForms().subscribe((form)=>this.form1=form);
  // }
  
}
