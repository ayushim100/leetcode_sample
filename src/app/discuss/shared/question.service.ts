import {Injectable , EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {Question} from './question';
import {QUESTIONS} from './questions';
 
@Injectable()
export class QuestionService{
    questions : Question[] = QUESTIONS;
    getQuestions(){
        return this.questions;
    }
    getQuestion(id:number){
        return QUESTIONS.find(question => question.id === id)
    }
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
        // var emitter = new EventEmitter(true);
        // setTimeout(()=>{
        //     emitter.emit(results)
        // }, 100);
        //return emitter;
        return results;
    }
}
