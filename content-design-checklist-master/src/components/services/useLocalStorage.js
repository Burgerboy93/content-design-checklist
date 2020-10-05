import { useReducer } from 'react'

export const ACTIONS = {
ADD_TO_CHECKLIST: 'addToChecklist',
COMPLETE_CHAPTER: 'completeChapter',
REMOVE_CHAPTER: 'removeChapter'
}

export function reducer(checklistChapters, action){
    console.log('current state', checklistChapters);
   switch(action.type){
        case ACTIONS.ADD_TO_CHECKLIST:
            console.log('ADding to checklist', action);
            return [...checklistChapters, newChapter(action.payload.id, action.payload.title, action.payload.category)]
        case ACTIONS.COMPLETE_CHAPTER:
            return  checklistChapters.map(checklistChapter => {
                if (checklistChapter.id === action.payload.id){
                return {...checklistChapters, complete: !checklistChapter.complete }
           }
            return checklistChapter
       })
        case ACTIONS.REMOVE_CHAPTER:
            return checklistChapters.filter(checklistChapter => checklistChapter.id !== action.payload.id)
        default:
            return checklistChapters
   }
}

function newChapter(id,title,category) {
    return { id: id, title: title, category: category, complete: false }
}

/* function getSavedChapters(key, initialValue){
    const checklist = JSON.parse(localStorage.getItem(key))

    if(checklist) return checklist

}
export default function useLocalStorage(key, initialValue) {
    const [state, dispatch] = useReducer (reducer, [])
 
    function addToList(){
        dispatch({ type: ACTIONS.ADD_TO_CHECKLIST })
        
    }
} */
