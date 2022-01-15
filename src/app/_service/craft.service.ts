import { Injectable } from '@angular/core';
import { Craft } from '../_model/craft';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  crafts: Craft[] = [{id:1,name:"Woooo"}, {id:1,name:"Boooo"}, {id:1,name:"Yoooo"}]

  constructor() { }

  getCraftsByCategoryAndTheme(category: string, theme: string){
    return this.crafts;
  }
}
