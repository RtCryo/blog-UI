import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Note } from '../_model/note';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<Note>;


  convertCm = "0";
  convertInch = "0";
  value = "";
  toDate: Date = new Date();
  displayedColumns: string[] = ['description', 'id'];
  mynotes: Note[];

  constructor() {
    this.mynotes = [{id: 1, description: "sfdg"},
    {id: 2, description: "rtzj"},
    {id: 3, description: "rthn"},
    {id: 4, description: "tzne"}]
   }

  ngOnInit(): void {
    setInterval(() => {
      this.toDate = new Date();
    }, 1000);
  }

  deleteNote(note: Note) {
    this.mynotes.splice(this.mynotes.indexOf(note),1);
    this.table.renderRows();
  }

  addNote(desc: string){
    if(desc.length > 0) {
      let note = new Note();
      note.id = this.mynotes.length + 1;
      note.description = desc;
      this.mynotes.push(note);
      this.table.renderRows();
      this.value = "";
    }
  }

  convertCmToInch(numm: any){
    if(!numm || numm === 0 || isNaN(+numm)) {
      this.convertCm = "0";
      this.convertInch = "0";
    } else {
      if(this.convertCm.charAt(0) === "0") {
        this.convertCm = this.convertCm.substring(1);
      }
      this.convertInch = "" + Math.round(+this.convertCm*0.39370*100)/100;
    }
  }

  convertInchToCm(numm: any){
    if(!numm || numm === 0 ||isNaN(+numm)) {
      this.convertCm = "0";
      this.convertInch = "0";
    } else {
      if(this.convertInch.charAt(0) === "0") {
        this.convertInch = this.convertInch.substring(1);
      }
      this.convertCm = "" + Math.round(+this.convertInch/0.39370*100)/100;
    }
  }
}
