import { Pokemon } from '../models/pokemon';
import { Bag } from '../models/Bag';
import { ActionModel } from './ActionModel';
import { ActionTypes } from './Actions';

export const bag = new Bag();

export function pokeReducer(state = bag, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.total = calculateTotal(state.pokemons);
                if (state.total <= 6) {
                    if (!isExist(state.pokemons, action.payload)) {
                        state.pokemons.push(action.payload);
                        console.log(state);
                        return state;
                    } else {
                        ActionTypes.Remove
                    }
                } else {
                    alert("Bag Full!!!");
                }
            };

        case ActionTypes.Remove:
            {
                const index = state.pokemons.indexOf(action.payload);
                state.pokemons.splice(index, 1);
                state.total = calculateTotal(state.pokemons);
                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = new Bag();
                state.total = calculateTotal(state.pokemons);
                console.log(state);
                return state;
            };

        case ActionTypes.List:
            {
                console.log(state);
                return state;
            };

        case ActionTypes.Count:
            {
                return calculateTotal(state.pokemons);
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

    function isExist(pokemons: Pokemon[], pokemon: Pokemon): boolean {
        let value = false;
        pokemons.forEach(p => {
            if (p.name == pokemon.name) {
                value = true;
            }
        });
        return value;
    }
}