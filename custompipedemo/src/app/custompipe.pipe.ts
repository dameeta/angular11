import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  // transform(value: number,exponent : number =1,buffer : number =0): number {
  //   return Math.pow(value,exponent) + buffer;
  // }

  /* transform(fname: string,...lname  : string[]): string {
    return fname + " " + lname.join(" ");
  } */

   transform(value : any): string {
    return JSON.stringify(value,null,2);
  } 
}
