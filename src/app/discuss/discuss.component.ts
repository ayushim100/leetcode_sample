import { Component, Input, OnInit } from '@angular/core';
import {Iform} from './shared/form.model'


@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
  title:any
  description:any
  form1 = [
    {
      id:1,
      title: 'Welcome to leetcode',
      time: '10:00 AM',
      description: 'Here is our first form. How did you like?',
      votes: 5 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  openForm(){
    console.log("hello");
  }
  submit(formValues:any){
    this.form1.push(formValues)
    console.log(formValues)
  }
}
