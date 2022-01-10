import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  input:string = '';
  result:string = '';

  constructor() { }

  ngOnInit(): void {
  }
 
  onClick(num: string) {
    
    if (num==".") {
      if (this.input !="") {
 
        const lastNum=this.getLastOperand()
        if (lastNum.lastIndexOf(".") >= 0 || isNaN(+this.input[this.input.length - 1])) return;
      }
    }
 
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
 
    this.input = this.input + num
    this.calcAnswer();
  }
 
 
  getLastOperand() {
    let pos:number;
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    return this.input.slice(pos+1)
  }
 
 
  pressOperator(op: string) {

    const lastKey = this.input[this.input.length - 1];

    if ((lastKey === '-' || lastKey === '+') && (op === "+" || op === "-"))  {
      this.input=this.input.slice(0, this.input.length-1);
    }

    if ((op === '/' || op === '*') && this.input.length < 1)  {
      return;
    } else if(lastKey === '/' || lastKey === '*') {
        this.input=this.input.slice(0, this.input.length-1);
    }

   
    this.input = this.input + op
    this.calcAnswer();
  }
 
 
  clear() {
    if (this.input !="" ) {
      this.input=this.input.slice(0, this.input.length-1)
    }
  }
 
  allClear() {
    this.result = '';
    this.input = '';
  }
 
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.slice(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.slice(0,formula.length - 1);
    }
 
    this.result = eval(formula);
  }
 
  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }

}
