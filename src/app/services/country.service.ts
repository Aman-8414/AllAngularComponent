import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  PostCountry(formData: any) {
    return this._http.post("https://localhost:7241/api/Countries/",formData);  
  }

  updateCountry(formData: any){
    debugger;
    return this._http.put("https://localhost:7241/api/Countries/"+formData.id,formData);
  }
  

  
  constructor(private _http:HttpClient) { }

  GetAllCountry(){
    debugger;
    return this._http.get("https://localhost:7241/api/Countries");
  }


  deleleCountry(id:any){
    debugger;
     return this._http.delete("https://localhost:7241/api/Countries/" +id)
 
   }






}
