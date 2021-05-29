import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-number',
  templateUrl: './find-number.component.html',
  styleUrls: ['./find-number.component.css']
})
export class FindNumberComponent implements OnInit {
  n : number;
  message:string;
  
  onChange(index: number){
      if(index%2!=0)
      {
        this.n=index*index+1;
        
      }
      else{
        this.n=index*index-1;
        
      }
      
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
