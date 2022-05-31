import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-exmple-for',
  templateUrl: './exmple-for.component.html',
  styleUrls: ['./exmple-for.component.scss']
})
export class ExmpleForComponent implements OnInit {

  @Input ("listaDiNumeri") listaDiNumeri:number [];


  constructor() { 
    this.listaDiNumeri =[];
    ///this.fillNumberInoList();
  }

  ngOnInit(): void {
  }

///fillNumberInoList(){
  //this.listaDiNumeri.push(1);
 // this.listaDiNumeri.push(2);
//}
}
