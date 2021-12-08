import { OnInit } from "@angular/core";

export class CalciComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    no = '0';
    firstOperand = null ;
    operator = null;
    secondNowait = false;

    public getNos(v : string){
    console.log(v);
    
    if(this.secondNowait)
    {
        this.no = v;
        this.secondNowait = false;

    }
    else{
        this.no === '0' ?this.no = v:this.no += v;
    }


}}