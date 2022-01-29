import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../_model/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  getAllThemes() {
    return this.http.get<Theme[]>(`http://localhost:8080/getAllThemes`, {withCredentials: true})
  }

  getAllThemesByCategory(category: string) {
    let param = new HttpParams().set('categoryName', category);
    return this.http.post<Theme[]>(`http://localhost:8080/getAllThemesByCategory`, param, {withCredentials: true})
  }

  createTheme(theme: Theme){
    return this.http.post<void>('http://localhost:8080/createTheme', theme, {withCredentials: true})
  }

  deleteThemes(themes: Theme[]){
    return this.http.post<void>('http://localhost:8080/deleteThemes', themes, {withCredentials: true})
  }
}
