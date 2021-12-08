

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