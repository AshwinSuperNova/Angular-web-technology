import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any):any{
    let curyear:any=new Date().getFullYear();
    let myyear:any=2002;
    let userage=curyear-myyear;
    return userage;
  }

}
