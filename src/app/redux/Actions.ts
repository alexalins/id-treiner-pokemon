import { Action } from '@ngrx/store';

export enum ActionTypes {
    Add = 'ADD',
    Remove = 'REM',
    Clear = 'CLE',
    List = 'LIS',
    Count = 'COU'
}

export const Add = (product: any) => {
    return <Action>{ type: ActionTypes.Add, payload: product };
}

export const Remove = (product: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: product };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}

export const List = () => {
    return <Action>{ type: ActionTypes.List, payload: null };
}

export const Count = () => {
    return <Action>{ type: ActionTypes.Count, payload: null };
}