function movieReducer( state = {movies: []}, action){
    switch(action.type) {
        case "FETCH_MOVIES_SUCCESS":
            return {...state, movies: action.payload}

        default: 
            return state
    }
}
export default movieReducer