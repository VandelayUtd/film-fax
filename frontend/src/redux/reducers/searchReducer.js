function searchReducer( state = { all: [], fullDetails: [], movieInfo: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_DETAILS":
            return{...state,
            fullDetails: action.payload
            }

        case "GET_MOVIE_INFO":
                return {...state,
                movieInfo: action.payload
                }

        default: 
            return state
    }
}

export default searchReducer