import {Pipe,PipeTransform} from '@angular/core';

@Pipe ({

    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any, name : string){ 

        if(name ===''){

            return value;
        }

        return value.filter((user: { firstName: string; }) => user.firstName.startsWith(name));
    }


    
}