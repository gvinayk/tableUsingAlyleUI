import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

 


  myURL : string = "https://hn.algolia.com/api/v1/search_by_date?tags=story"; 

  constructor(private GetDataFromService : HttpClient ) { }

  getDataMethod(){
    return this.GetDataFromService.get(this.myURL);
  }
}
