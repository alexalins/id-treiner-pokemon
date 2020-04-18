import { Pokemon } from '../models/pokemon';
import { Bag } from '../models/Bag';
import { ActionModel } from './ActionModel';
import { ActionTypes } from './Actions';

export const bag = new Bag();

export function pokeReducer(state = bag, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.products.push(action.payload);
                state.total = calculateTotal(state.products);
                console.log(state);
                return state;
            };

        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                state.products.splice(index, 1);
                state.total = calculateTotal(state.products);
                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new Bag();
                state.total = calculateTotal(state.products);
                console.log(state);
                return state;
            }

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