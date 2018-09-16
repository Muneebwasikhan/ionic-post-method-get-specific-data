// post method by using api in ionic get specific data


import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '../../../node_modules/@angular/common/http';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  obj;

//   your api could be here
  url: string ="https://---------------";

  // let suppose my id is "53" and im getting data from that id so if i send object of my id so api will send me data from that id 
  myId = 53;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private http: HttpClient,
     public appCtrl: App,   
    ) {        
        // getting data when page loads
        this.load();


  }
  
  

  load()
  {

    // simply define you api (Application Program Interface) in post method after that on next argument we will setUp id in object

    const id = {
      userId : this.myId,
    }
    this.http.post(this.url,id,{
    headers: { 'Content-Type': 'application/json' }})
    .subscribe(res => { 
    // setting the result of that api or data of that api to obj    
    this.obj = res;
    console.log(res); 
    }, 
    (err: HttpErrorResponse) => { 
    if(err.status == 500){
    alert("Internal Server Error.Try Again");
    }
    });
  }
  
}