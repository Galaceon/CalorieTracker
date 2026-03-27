import type { Activity } from "../types"

export type ActivityActions = { // Type de Acciones

}

type ActivityState = { // Type para initialState
    activities : Activity[]
}

export const initialState : ActivityState = { // State tipo objeto
    activities: []
}

export const activityReducer = (state : ActivityState = initialState, action: ActivityActions) => { // Reducer

}