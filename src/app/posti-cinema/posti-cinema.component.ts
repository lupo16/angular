import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-posti-cinema',
  templateUrl: './posti-cinema.component.html',
  styleUrls: ['./posti-cinema.component.scss']
})
export class PostiCinemaComponent implements OnInit {

  @Input ("posti") posti:boolean [];

  constructor() { 
    this.posti =[];
  }

  stampaSituazionePosti(){
    const vett:string[]= []
    
    this.posti.forEach(item =>{
      if(item)
      vett.push("Libero");
      else
      vett.push("Occupato");
    })

    return vett;
  }

  contaPostiLiberi(){
    let conta=0;
    this.posti.forEach(item =>{
      if(item)
      conta++;
    })

 ///for(let i=0;i<this.posti.length;i++){
    //  if(this.posti[i])
      //conta++
    //}
  }

  ngOnInit(): void {
  }

}
