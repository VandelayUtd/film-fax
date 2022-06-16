function searchReducer( state = { all: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }

        case "GET_MOVIE_INFO":
                return {...state,
                all: state.all.map(movie => {
                    if(movie.id === action.payload.id) {
                        return action.payload
                    }
                    return movie;
                }
                )
                }

        default: 
            return state
    }
}

export default searchReducer