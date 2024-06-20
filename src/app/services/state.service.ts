import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  PostState(formData: any) {
    return this._http.post("https://localhost:7241/api/States/",formData);  
  }

  updateState(formData: any){
    debugger;
    return this._http.put("https://localhost:7241/api/States/"+formData.id,formData);
  }
  

  
  constructor(private _http:HttpClient) { }

  GetAllState(){
    return this._http.get("https://localhost:7241/api/States");
  }


  deleleState(id:any){
    debugger;
     return this._http.delete("https://localhost:7241/api/States/" +id)
 
   }






}



