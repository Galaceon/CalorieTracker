import type { Activity } from "../types"

// Type de Acciones
export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity : Activity}}

// Type para initialState
type ActivityState = { 
    activities : Activity[]
}

// State tipo objeto
export const initialState : ActivityState = { 
    activities: []
}

// Reducer
export const activityReducer = (state : ActivityState = initialState, action: ActivityActions) => { 
    
    if(action.type === 'save-activity') {
        // Este codigo maneja la lógica para actualizar el state
        console.log('Desde el type de save-activity')
    }

}