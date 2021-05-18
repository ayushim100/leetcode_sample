import { Component, OnInit, OnChanges } from '@angular/core';
import { QuestionService } from '../discuss/shared/question.service';
import {Question} from '../discuss/shared/question';
import {QUESTIONS} from '../discuss/shared/questions';
import { Router } from '@angular/router';
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
  constructor(private questionService: QuestionService, private router: Router) { }
  searchQuestion(searchTerm: string, filter:string){
    this.visibleQuestions = this.questionService.searchQuestion(searchTerm,filter)
    // this.questionService.searchQuestion(searchTerm).subscribe((questionss: any[])=>{
    //   this.visibleQuestions = questionss;
    //})
  }
  filterQuestions(filter:string){
    this.searchQuestion(this.searchTerm,filter);
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
    //console.log(index);
    //console.log(this.visibleQuestions[index]);
  }
  
  ngOnInit(){
    this.questions = this.questionService.getQuestions()
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
