import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie } from "../redux/actions/movieActions"

 class MoviesForm extends Component {

    state = {
        title: ""
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMovie(this.state)
        this.setState({
            title: ""
        })
    }

    render() {
        return (
            <div>
                <h1>Add a Movie to the list</h1>
                <form onSubmit={this.handleSubmit}>
                    Movie Name: <input type="text" value={this.state.title} onChange={this.handleChange}/>
                    <input type="submit" value="Add Movie"/>
                </form>
            </div>
        )
    }
}



export default connect(null, { addMovie })(MoviesForm)