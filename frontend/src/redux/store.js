import {createStore, combineReducers, applyMiddleware, compose} from "redux" 
import movieReducer from "./reducers/movieReducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    movies: movieReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)) 
)

export default store