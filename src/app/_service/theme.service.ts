import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../_model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themesKarten: Theme[] = [{id:1,name:"Ostern"},
  {id:2, name:"X-Mas"}, {id:3, name:"Silvester"},
  {id:4, name:"Geburtstag"}, {id:5, name:"Baby"},
  {id:6, name:"Trauer"}, {id:7, name:"Hochzeit"}];

  constructor(private http: HttpClient) { }

  getAllThemes() {
    return this.http.get<Theme[]>(`http://localhost:8080/getAllThemes`, {withCredentials: true})
  }

  getAllThemesByCategory(category: string) {
    switch (category) {
      case "Karten": {
        return this.themesKarten;
        break;
      }
      case "Verpackung": {
        return this.themesKarten;
        break;
      }
      case "Boxen": {
        return this.themesKarten;
        break;
      }
      case "Alben": {
        return this.themesKarten;
        break;
      }
      default: {
        return [];
        break;
      }
    }
  }
}
