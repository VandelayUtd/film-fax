function searchReducer( state = { all: [], fullDetails: []}, action){
    console.log(action.payload)
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_MOVIE_INFO":
            return{...state,
            fullDetails: action.payload
            }

        default: 
            return state
    }
}

export default searchReducer