import { ADD_TO_LIST, REMOVE_FROM_LIST } from './actionTypes';
import { data } from '../data/chapterData';

const initialState = {
    data,
    checklistItems: []
}

export const checklistReducer = (state = initialState, action) => {

    if (action.type === ADD_TO_LIST) {
        let checklistItem = state.data.find(chapter => chapter.id === action.id)

        let existedChapter = state.checklistItems.find(chapter => action.id === chapter.id)
        if (existedChapter) {
            return {
                ...state
            }
        } else {
            return {
                ...state,
                checklistItems: [...state.checklistItems, chapter]
            }

        }
    }
    if (action.type === REMOVE_FROM_LIST) {
        let newChecklist = state.checklistItems.find(chapter => action.id !== chapter.id)

        return {
            ...state,
            checklistItems: newChecklist
        }
    } else {
        return state
    }
}