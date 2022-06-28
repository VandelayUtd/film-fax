
const devEnvRoot = 'http://127.0.0.1:3001/'
const prodEnvRoot = 'https://film-fax.herokuapp.com/'

export const getMovies = () => {
    return (dispatch) => {
        fetch(`${devEnvRoot}/movies`)
        .then(res => res.json())
        .then(movies => {
            dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: movies})
            }
        )
    }
}


export const addMovie = (movie) => {
    return (dispatch) => {
        
        fetch(`${devEnvRoot}/movies`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(movie => {
            if (movie.error){
                alert(movie.error)
            } else {
                alert(`${movie.title} has been added to the list`)
            dispatch({type: "ADD_MOVIE", payload: movie})
        }})
    }
}

export const searchMovie = (movieTitle) => {
    return(dispatch) => {
        fetch(`${devEnvRoot}/movies/search?q=${movieTitle}`)
        .then(res => res.json())
        .then(movieData => {
            dispatch({type: "SEARCH_MOVIES", payload: movieData})
        })
        .catch()
    }
}



export const getInfo = (movieId) => {
    console.log(movieId)
    return(dispatch) => {
        fetch(`${devEnvRoot}/movies/info/${movieId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "GET_MOVIE_INFO", payload: data})
        })
        .catch()
    }
}


export const deleteMovie = (movieId) => {
    return(dispatch) => {
        fetch(`${devEnvRoot}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(movieData => {
            dispatch({ type:"DELETE_MOVIE_SUCCESS", payload: movieData, movieId})
        })
    }
}