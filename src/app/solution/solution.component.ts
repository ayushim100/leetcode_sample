import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  isReadMore = true;
  title = 'Star Rating';  
  starList: boolean[] = [true,true,true,true,true]; 
  constructor() { }
  showText(){
    this.isReadMore = !this.isReadMore;
  }
  setStar(data:any){                               
    for(var i=0;i<=4;i++){  
      if(i<=data){  
        this.starList[i]=false;  
      }  
      else{  
        this.starList[i]=true;  
      }  
   }  
} 
  ngOnInit(): void {
  }

}
