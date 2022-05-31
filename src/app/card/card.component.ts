import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input("nome")nome:string;
  @Input("cognome")cognome:string;
  @Input()listaCibi :string []=[];
  
  constructor() { 
  this.nome=""
  this.cognome=""
  //this.listaCibi=[]
}
  ngOnInit(): void {
  }

}
