import { Component, Input, OnInit } from '@angular/core';
import {Iform} from '../shared/form.model'
@Component({
  selector: 'form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  @Input() form:any;

  constructor() {}

  ngOnInit(): void {
  }

}
