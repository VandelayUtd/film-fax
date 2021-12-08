function movieReducer( state = {all: []}, action){
    switch(action.type) {
        case "FETCH_MOVIES_SUCCESS":
            return {...state, all: action.payload}

        default: 
            return state
    }
}
export default movieReducer