import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URLSearchParams } from "@angular/http"


@Injectable()
export class EnhanceServiceService {
 constructor (
    private http: Http
  ) {}

  enhanceImage(imgData: string) {
  	let data = new URLSearchParams();
  	data.append("test", imgData);  	

     this.http.post('/api', data)
      .subscribe(data => {
            alert('ok');
      }, error => {
          console.log(error.json());
      });
  }

}
