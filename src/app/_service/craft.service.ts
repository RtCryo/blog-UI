import { Injectable } from '@angular/core';
import { Craft } from '../_model/craft';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../_model/image';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  //crafts: Craft[] = [{id:1,craftName:"Woooo", description: "lalala"}, {id:1,craftName:"Boooo", description: "lalala"}, {id:1,craftName:"Yoooo", description: "lalala"}]

  constructor(private http: HttpClient) { }

/*   getCraftsByCategoryAndTheme(category: string, theme: string){
    return this.crafts;
  } */

  getAllCrafts(){
    return this.http.get<Craft[]>(`http://localhost:8080/getAll`, {withCredentials: true})
  }

  saveCraft(craft: Craft){
    return this.http.post<void>(`http://localhost:8080/saveCraft`, craft, {withCredentials: true})
  }

}
