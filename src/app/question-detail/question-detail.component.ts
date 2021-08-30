import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {QuestionService} from '../discuss/shared/question.service';
import {ActivatedRoute} from '@angular/router';
import {Router}  from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  @Output() submittedQuestionId = new EventEmitter<any>();
  question : any;
  constructor(private questionService : QuestionService, private route : ActivatedRoute,private router:Router,
    private toastr: ToastrService) { }
  notification(id:number){
    // this.questionService.completedQuestion(id).subscribe(()=>{
    //   this.toastr.success("question completed")
    //   this.router.navigate(['cards'])
    // });
    this.toastr.success("question completed")
    this.router.navigate(['cards'])
  }
  ngOnInit(){
    this.questionService.getQuestion(+this.route.snapshot.params['id']).subscribe((qs) =>{
      this.question = qs;
    });
    //
  }

}
