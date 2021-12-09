

export const getMovies = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/movies')
        .then(res => res.json())
        .then(movies => {
            console.log(movies)
            dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: movies})
            }
        )
    }
}


export const addMovie = (movie) => {
    return (dispatch) => {
        fetch('http://localhost:3001/movies',{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(movie => {
            dispatch({type: "ADD_MOVIE", payload: movie})
        })
    }
}

export const searchMovie = (movie) => {
    return(dispatch) => {
        fetch('http://localhost:3001/searched_movies', {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(movie)
    })
    .then(res => res.json())
    .then(movie => {
    
        dispatch({type: "SEARCH_MOVIES", payload: movie})
    })
    }
}