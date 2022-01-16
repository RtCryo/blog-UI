import { Injectable } from '@angular/core';
import { Craft } from '../_model/craft';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  crafts: Craft[] = [{id:1,name:"Woooo", description: "lalala"}, {id:1,name:"Boooo", description: "lalala"}, {id:1,name:"Yoooo", description: "lalala"}]

  constructor() { }

  getCraftsByCategoryAndTheme(category: string, theme: string){
    return this.crafts;
  }
}
