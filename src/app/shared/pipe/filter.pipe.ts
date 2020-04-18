import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'  
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchPokemon: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchPokemon) {
      return items;
    }
    searchPokemon = searchPokemon.toLowerCase();

    return items.filter(it => {
      return it.toLowerCase().includes(searchPokemon);
    });
  }

}
