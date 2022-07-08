function movieReducer( state = {all: []}, action){
    switch(action.type) {
        case "FETCH_MOVIES_SUCCESS":
            return {...state, all: action.payload}
        
        case "ADD_MOVIE":
            return {...state, all: [...state.all, action.payload]}

        case "DELETE_MOVIE_SUCCESS":
            return {...state, all: state.all.filter(movie => movie.id !== action.movieId)}

        case "LOADING_SIMILAR_INFO":
            return {...state,
                loadingSimilarInfo: true
            }

        case "GET_SIMILAR_INFO":
                return {...state,
                    similar: action.payload,
                    loadingSimilarInfo: false
                }


        default: 
            return state
    }

    
}
export default movieReducer