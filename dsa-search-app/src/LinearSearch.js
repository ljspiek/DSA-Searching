import React, { Component } from 'react'

export default class LinearSearch extends Component {

    state = {
        result: null
    }

    
    linearSearch = (num) => {
        console.log(this.props)
        const data = this.props.data;
        let count = 1;
        for(let i = 0; i < data.length; i++) {
            if(data[i] === num) return `Search took ${count} searches to find`;
            count++
        }
        return `Number not found; ${count} searches completed.`
    }

    submitHandler = (e) => {
        e.preventDefault();
        const num = parseInt(e.target.input.value)
        console.log(e.target.input.value)
        const result = this.linearSearch(num)

        debugger    
        this.setState({
            result
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.submitHandler(e)}>
                    <input type="number" id="input"></input>
                    <button type='submit'>Linear Search</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        )
    }
}
