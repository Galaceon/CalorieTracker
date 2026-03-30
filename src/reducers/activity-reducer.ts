import type { Activity } from "../types"

// Type de Acciones
export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity : Activity}} |
    {type: 'set-activeId', payload: {id : Activity['id']}} 


// Type para initialState
export type ActivityState = { 
    activities : Activity[],
    activeId: Activity['id']
}

// State tipo objeto
export const initialState : ActivityState = { 
    activities: [],
    activeId: ''
}

// Reducer
export const activityReducer = (
        state : ActivityState = initialState, 
        action: ActivityActions
    ) => { 
    
    if(action.type === 'save-activity') {
        // Este codigo maneja la lógica para actualizar el state
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if(action.type === 'set-activeId') {

        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state
}