

export const getMovies = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/movies')
        .then(res => res.json())
        .then(movies => {
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
            if (movie.error){
                alert("This Movie is already on the list")
            } else {
                alert(`${movie.title} has been added to the list`)
            dispatch({type: "ADD_MOVIE", payload: movie})
        }})
    }
}

export const searchMovie = (movieTitle) => {
    return(dispatch) => {
        console.log(movieTitle)
        fetch(`http://localhost:3001/movies/search?q=${movieTitle}`)
        .then(res => res.json())
        .then(movieData => {
        console.log(movieData)
            dispatch({type: "SEARCH_MOVIES", payload: movieData})
        })
    }
}

// export const deleteMovie = (movie) => {
//     return(dispatch) => {

//     }
// }