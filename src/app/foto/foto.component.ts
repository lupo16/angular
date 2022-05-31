import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  private isContentLoaded: boolean;
  myArray :any []
  constructor(private httpClient: HttpClient) {
    this.isContentLoaded = false;
    this.myArray = []
  }

  ngOnInit(): void {
    this.dataFetcher();
  }
  getIsContentLoaded() : boolean{
    return this.isContentLoaded
  }

  
  // significa che quando la chiamata promise ha finito, subiscibe viene eseguita
  //
  dataFetcher(): void {
    for (let i = 0; i < 10; i++) {
      this.httpClient
      .get('https://dog.ceo/api/breeds/image/random')
      .subscribe((response: any) => {
        console.log(response);
        this.isContentLoaded = true;
        this.myArray.push(response['file'])
        
      });
    }
  }

}

