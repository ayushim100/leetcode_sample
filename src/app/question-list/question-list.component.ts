import { Component, OnInit, OnChanges } from '@angular/core';
import { QuestionService } from '../discuss/shared/question.service';
import {Question} from '../discuss/shared/question';
import {QUESTIONS} from '../discuss/shared/questions';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  filterBy: string = 'all';
  visibleQuestions: Question[] = QUESTIONS;
  questions!: Question[];
  isAsc: Boolean = true;
  searchTerm: string = "";
  constructor(private questionService: QuestionService) { }
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
    const index: any = Math.floor(Math.random()*this.visibleQuestions.length)
    console.log(index);
    console.log(this.visibleQuestions[index]);
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
