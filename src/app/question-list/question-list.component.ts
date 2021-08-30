import { Component, OnInit, OnChanges, Inject, Output,EventEmitter } from '@angular/core';
import { QuestionService } from '../discuss/shared/question.service';
import {Question} from '../discuss/shared/question';
import {QUESTIONS} from '../discuss/shared/questions';
import { Router } from '@angular/router';
import {TAGS} from '../discuss/shared/tags';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  visibleQuestions: Question[] = QUESTIONS;
  questions!: Question[];
  isAsc: Boolean = true;
  searchTerm: string = "";
  index :any;
  tags: any = TAGS;
  selectedTags: Boolean = false;

  @Output() completedQuestion = new EventEmitter<number>();

  constructor(private questionService: QuestionService, private router: Router) { }
  searchQuestion(searchTerm: string, filter:string){
    this.visibleQuestions = this.questionService.searchQuestion(searchTerm,filter)
  }
  filterQuestions(filter:string){
    if(filter=='all')this.questionService.getQuestions().subscribe(question=>this.visibleQuestions=question);
    else this.questionService.filterByDifficulty(filter).subscribe(question=>this.visibleQuestions=question);
    //this.searchQuestion(this.searchTerm,filter);
  }
  check(){
    this.selectedTags = !this.selectedTags
  }
  sortByName(){
    if(this.isAsc){
      this.visibleQuestions.sort(sortByNameAsc);
    }else{
      this.visibleQuestions.sort(sortByNameDsc);
    }
    this.isAsc = !this.isAsc
  }
  randomQuestion(){
    this.index= Math.floor(Math.random()*this.visibleQuestions.length);
    this.router.navigate(['/cards',this.index])
  }
  countCompletedQuestion(){
    let count=0;
    this.visibleQuestions.forEach(question=>{
      if(question.completed)count++;
    })
    return count;
  }
  showNumberOfCompletedQuestion(value:number){
    this.completedQuestion.emit(value);
  }
  ngOnInit(){
    this.questionService.getQuestions().subscribe((questions)=>{
      this.visibleQuestions = questions;
    })
  }    
}

function sortByNameAsc(s1:any,s2:any){
  if(s1.title > s2.title)return 1;
  else if(s1.title === s2.title)return 0;
  else return -1;
}
function sortByNameDsc(s1:any, s2:any){
  if(s1.title < s2.title)return 1;
  else if(s1.title === s2.title)return 0;
  else return -1 
}
    // this.questionService.searchQuestion(searchTerm).subscribe((questionss: any[])=>{
    //   this.visibleQuestions = questionss;
    //})
    //@Inject('BaseURL') private BaseURL:string