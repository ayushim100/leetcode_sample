import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../discuss/shared/question.service';
import {Question} from '../discuss/shared/question';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  question : any;
  constructor(private questionService : QuestionService, private route : ActivatedRoute) { }
  
  ngOnInit(){
    this.question = this.questionService.getQuestion(+this.route.snapshot.params['id']);
    //
  }

}
