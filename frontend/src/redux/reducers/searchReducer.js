function searchReducer( state = { all: [], movieInfo: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_MOVIE_INFO":
                return {...state,
                movieInfo: [...state.movieInfo, action.payload]
                }

        default: 
            return state
    }
}

export default searchReducer