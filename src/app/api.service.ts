import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 
   apiurl = 'http://ec2-18-217-97-72.us-east-2.compute.amazonaws.com:3000/api/search?place=';
   detailsApi="/api/details?place=";
  constructor(private httpClient: HttpClient) { 


  }

  public getPlaces(searchName){
    return this.httpClient.get<any>(this.apiurl+searchName);
    
  }

  public setPlaceId(id:string) {
    return this.httpClient.get<any>(this.detailsApi+id);
    console.log(id);
    
  }

}

