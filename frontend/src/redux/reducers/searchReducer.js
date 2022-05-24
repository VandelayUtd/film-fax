function searchReducer( state = { all: [], fullDetails: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_MOVIES_INFO":
            return{...state,
            fullDetails: action.payload
            }

        default: 
            return state
    }
}

export default searchReducer