import {Injectable , EventEmitter} from '@angular/core';
import {Observable , of} from 'rxjs';
import {Subject} from 'rxjs';
import {Question} from './question';
import {QUESTIONS} from './questions';
import { HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { baseURL } from '/Users/HOME/Angular/leetcode/src/app/shared/baseurl';

@Injectable()
export class QuestionService{
    questions : Question[] = QUESTIONS;

    constructor(private http: HttpClient) { }
    getQuestions():Observable<Question[]>{
        return this.http.get<Question[]>(baseURL + 'cards');
    }
    getQuestion(id:number):Observable<Question[]>{
        return this.http.get<Question[]>(baseURL + 'cards/' + id);
    }
    filterByDifficulty(filter:string){
        return this.http.get<Question[]>(baseURL + 'cards?' + 'difficulty='+filter);
    }
    // completedQuestion(id:number):Observable<any>{
    //     return this.http.put<any>(baseURL+'cards/'+ id, true);
    // }
    // searchQuestionByTag(tag:string):Observable<Question[]>{
    //     return this.http.get<Question[]>(baseURL + 'cards?'+ tag).
    // }
    searchQuestion(searchTerm:string, filter:string){
        var results : Question[] =[];
        if(searchTerm === ""){
            if(filter==='all'){
                results = this.questions.slice(0);
            }else{
                results = this.questions.filter(question =>{
                return question.difficulty === filter;
                })
            }
        }
        else{
            this.questions.forEach(question=>{
                if(filter==='all'){
                    if(question.title.indexOf(searchTerm) > -1)results.push(question);
                    if(question.id == parseInt(searchTerm))results.push(question);                    
                }
                else{
                    if(question.difficulty===filter && question.title.indexOf(searchTerm) > -1)results.push(question);
                    if(question.difficulty===filter && question.id == parseInt(searchTerm))results.push(question);
                }
            })
        }
        return results;
    }
}
    //getQuestions():Observable<Question[]>{
    //  let subject = new Subject<Question[]>()
    //  setTimeout(() => {subject.next(QUESTIONS); subject.complete();

    //  }, 100)
    //}
        // var emitter = new EventEmitter(true);
        // setTimeout(()=>{
        //     emitter.emit(results)
        // }, 100);
        //return emitter;
    // getQuestions(){
    //     return this.questions;
    // }
        // private handleError<T>(operation = 'operation',result?:T){
    //     return (error:any): Observable<T> =>{
    //         console.log(error);
    //         return of(result as T);
    //     }
    // }