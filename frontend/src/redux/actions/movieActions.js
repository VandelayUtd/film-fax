

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
    return(dispatch) => {
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_gyxobrhk/${movie.title}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.results[0].id)
            fetch(`https://imdb-api.com/en/API/Title/k_gyxobrhk/${data.results[0].id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                
                fetch('http://localhost:3001/movies',{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({movie: data})
                })
                .then(res => res.json())
                .then(movie => {
                    dispatch({type: "ADD_MOVIE", payload: movie})
                    
                })
            })
        })
    }
}