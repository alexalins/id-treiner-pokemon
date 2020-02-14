import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon';
 
@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<Pokemon[]>(this.url);
  }

}
