import { ADD_TO_LIST, REMOVE_FROM_LIST } from './actionTypes';

export const addToList= (id)=>{
    return{
        type: ADD_TO_LIST,
        id 
    }
}

export const removeFromList= (id)=>{
    return{
        type: REMOVE_FROM_LIST,
        id 
    }
}