import React, { Component } from 'react'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        fetch("https://imdb-api.com/en/API/SearchSeries/k_iqbbu426/"+inputMovie)
            .then(res => res.json())
            .then(result => {
                const{  results = ""} = result
                console.log({results});
                
                this.props.onResults(results)
                
            })
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input"
                            onChange={this._handleChange} 
                            type="text" 
                            placeholder="Movie to search.." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button><br/> 
                        <br/> <br/> <br/> 
                    </div>
                </div>
            </form>
            
        )
    }
}