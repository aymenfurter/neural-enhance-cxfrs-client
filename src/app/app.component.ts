import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { URLSearchParams } from "@angular/http"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgFile = 'foobar';
  processing = false;  
  imgReceived = '';
  restUrl = '/services/enhance/';

  constructor (
    private http: Http
  ) {}


  onUpload() {  	
        this.enhanceImage(this.imgFile);
  }

  onReset() {
    this.imgReceived = "";
    this.imgFile = "foobar";
  }

  handleResponse(response: any) {
	
	this.processing = false;
  	var respBody = JSON.parse(response.text());

  	if (respBody.message == "OK") {
  		this.imgReceived = "data:image/png;base64," +respBody.img;
      this.imgFile = "data:image/png;base64," + this.imgFile;
  	}
  }

  enhanceImage(imgData: string) {
  	this.processing = true;
  	var params = 'base64Image=' + encodeURIComponent(imgData);
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
 

  	this.http.post(this.restUrl, params , {headers: headers})
	  .subscribe(
	    data => this.handleResponse(data),
	    err => console.log(err),
	    () => console.log('Call Complete')
	  );

  }

  changeListener($event) : void {
	  this.readThis($event.target);
	}

	readThis(inputValue: any): void {
	  var file:File = inputValue.files[0];
	  var imgReader:FileReader = new FileReader();

	  imgReader.onloadend = (e) => {
	    this.imgFile = imgReader.result.substr(imgReader.result.indexOf(",") + 1); ;
	  }
	  imgReader.readAsDataURL(file);
	}

}
