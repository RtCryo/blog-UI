import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: string[] = ["Karten", "Verpackung", "Boxen", "Alben", "Junk Journal", "Sonstiges"];

  constructor() { }

  getAllCategory() {
    return this.category;
  }
}