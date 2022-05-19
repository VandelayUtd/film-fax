function searchReducer( state = { all: []}, action){
    switch(action.type) {
        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload
            }
        default: 
            return state
    }
}

export default searchReducer