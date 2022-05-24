function searchReducer( state = { all: [], fullDetails: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_DETAILS":
            return{...state,
            fullDetails: action.payload
            }

        default: 
            return state
    }
}

export default searchReducer