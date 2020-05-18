import { Pokemon } from '../models/pokemon';
import { Bag } from '../models/Bag';
import { ActionModel } from './ActionModel';
import { ActionTypes } from './Actions';
import { Treiner } from '../models/Treiner';

export const bag = new Bag();

export function pokeReducer(state = bag, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.total = calculateTotal(state.pokemons);
                state.pokemons.push(action.payload);
                return state;
            };

        case ActionTypes.Remove:
            {
                const index = state.pokemons.indexOf(action.payload);
                state.pokemons.splice(index, 1);
                state.total = calculateTotal(state.pokemons);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new Bag();
                state.total = calculateTotal(state.pokemons);
                return state;
            };

        case ActionTypes.List:
            {
                return state;
            };

        case ActionTypes.Count:
            {
                return calculateTotal(state.pokemons);
            };

        case ActionTypes.Treiner:
            {
                let treiner = new Treiner();
                treiner = action.payload;
                state.treiner = treiner;
                console.log(state)
                return state;
            };

        default:
            return state;
    }

    function calculateTotal(pokemons: Pokemon[]): number {
        let total: number = 0;
        pokemons.forEach(pokemon => {
            total += 1;
        });
        return total;
    }


}