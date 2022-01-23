import { Injectable } from '@angular/core';
import { Craft } from '../_model/craft';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(private http: HttpClient) { }

  getAllCrafts(){
    return this.http.get<Craft[]>(`http://localhost:8080/getAll`, {withCredentials: true})
  }

  saveCraft(craft: Craft){
    return this.http.post<void>(`http://localhost:8080/saveCraft`, craft, {withCredentials: true})
  }

}
