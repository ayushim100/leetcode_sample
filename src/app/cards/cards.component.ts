import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(@Inject('BaseURL') private BaseURL:string) { }
  //count how many questions are completed
  completedQuestions(value : number){
    console.log(value);
  }
  ngOnInit(): void {
  }

  
}
