import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {

@Input("numero1") numero1:number;
@Input("numero2") numero2:number;

  constructor() {
    this.numero1=0;
    this.numero2=0;

   }
 
  

  ngOnInit(): void {
  }

}
