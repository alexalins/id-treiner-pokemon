import { Pokemon } from './pokemon';
import { Treiner } from './Treiner';

export class Bag {
    public pokemons: Pokemon[] = [];
    public total: number = 0;
    public treiner: Treiner = new Treiner();
}