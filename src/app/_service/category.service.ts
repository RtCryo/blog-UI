import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../_model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory() {
    return this.http.get<Category[]>(`http://localhost:8080/getAllCategories`, {withCredentials: true})
  }

  createCategory(category: Category) {
    return this.http.post<void>(`http://localhost:8080/createCategory`, category, {withCredentials: true})
  }

  deleteCategories(caterories: Category[]){
    return this.http.post<void>('http://localhost:8080/deleteCategories', caterories, {withCredentials: true})
  }

}