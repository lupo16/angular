import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  
  @Input("myObject") myObject: any

  constructor() { 
    this.myObject={
      id:Number,
      url:String

    }
  }

  ngOnInit(): void {
  }

}
