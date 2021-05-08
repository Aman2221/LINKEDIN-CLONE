export const initialState = {
    user : null,
    valid : false
}

export const reducer = (action, state) => {
    switch(action.type){
        case 'SET_USER': 
            return {
                ...state,
                user : action.user
            }
        case 'SET_VALID' : 
            return {
                ...state,
                valid : action.valid
            }
        default : 
            return state
    }
}