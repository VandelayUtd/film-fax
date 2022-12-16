
// const prodEnvRoot = 'http://127.0.0.1:3001/'
const prodEnvRoot = 'https://film-fax.herokuapp.com'

export const getMovies = () => {
    return (dispatch) => {
        fetch(`${prodEnvRoot}/movies`)
        .then(res => res.json())
        .then(movies => {
            dispatch({ type: "FETCH_MOVIES_SUCCESS", payload: movies})
            }
        )
        .catch(err => {
            console.log(err)
        })
    }
}


export const addMovie = (movie) => {
    return (dispatch) => {
        
        fetch(`${prodEnvRoot}/movies`,{
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movie)
        })
        .then(res => res.json())
        .then(movie => {
            console.log(movie)
            if (movie.error){
                alert(movie.error)
            } else {
                alert(`${movie.title} has been added to the list`)
            dispatch({type: "ADD_MOVIE", payload: movie})
        }})
        .catch(err => {
            console.log(err)
        })
    }
}

export const searchMovie = (movieTitle) => {
    return(dispatch) => {
        dispatch({ type: "LOADING_SEARCH"})
        fetch(`${prodEnvRoot}/movies/search?q=${movieTitle}`)
        .then(res => res.json())
        .then(movieData => {
            dispatch({type: "SEARCH_MOVIES", payload: movieData})
        })
        .catch(err => {
            console.log(err)
        })
    }
}



export const getInfo = (movieId) => {
    console.log(movieId)
    return(dispatch) => {
        dispatch({ type: "LOADING_INFO" })
        fetch(`${prodEnvRoot}/movies/info/${movieId}`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "GET_MOVIE_INFO", payload: data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getSimilarInfo = (movieId) => {
    console.log(movieId)
    return(dispatch) => {
        dispatch({ type: "LOADING_SIMILAR_INFO"})
        fetch(`${prodEnvRoot}/movies/info/${movieId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "GET_SIMILAR_INFO", payload: data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const deleteMovie = (movieId) => {
    return(dispatch) => {
        fetch(`${prodEnvRoot}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(movieData => {
            dispatch({ type:"DELETE_MOVIE_SUCCESS", payload: movieData, movieId})
        })
        .catch(err => {
            console.log(err)
        })
    }
}