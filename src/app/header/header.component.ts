import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ///title:string=" Laura" 

  @Input('title') title: string=""
  @Input ('ilmioNome') ilmioNome:string=""
  @Input("password") password: string = ""
  
  myLengthPassword(parola: string) {
    return parola.length;
  }

  ngOnInit(): void {
  }

}
