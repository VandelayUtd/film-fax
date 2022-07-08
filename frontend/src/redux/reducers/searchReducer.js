function searchReducer( state = { all: [], similar: ''}, action){
    switch(action.type) {

        case "LOADING_SEARCH":
            return {...state,
                loadingSearch: true
            }

        case "SEARCH_MOVIES": 
            return {...state, 
            all: action.payload,
            loadingSearch: false
            }


        case "LOADING_INFO":
            return {...state,
            loadingInfo:true
            }

        case "GET_MOVIE_INFO":
                return {...state,
                    all: state.all.map(movie => {
                        if(movie.id === action.payload.id) {
                            return action.payload
                        }
                        return movie;
                    }), 
                    loadingInfo: false
            }

        default: 
            return state
    }
}

export default searchReducer