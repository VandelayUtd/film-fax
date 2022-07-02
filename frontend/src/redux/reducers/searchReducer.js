function searchReducer( state = { all: [], similar: ''}, action){
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

        case "GET_SIMILAR_INFO":
                return {...state,
                    similar: action.payload
                }

        default: 
            return state
    }
}

export default searchReducer