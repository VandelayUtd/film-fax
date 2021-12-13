function movieReducer( state = {all: []}, action){
    console.log(action)
    switch(action.type) {
        case "FETCH_MOVIES_SUCCESS":
            return {...state, all: action.payload}
        
        case "ADD_MOVIE":
            return {...state, all: [...state.all, action.payload]}

        case "DELETE_MOVIE_SUCCESS":
            return {...state, all: state.all.filter(movie => movie.id !== action.movieId)}

        default: 
            return state
    }

    
}
export default movieReducer