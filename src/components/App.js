import React, { Component } from 'react'
import Article from './Article'


export default class App extends Component {
    state = {
        hasError: false
    }

//function App() {

    componentDidCatch() {
        this.state({ hasError: true});
    }

    render() {
    return(
        <div>
            <h1>Michael App</h1>
            {this.state.hasError ?
          <div>
                <p>Error, database not found</p>
            </div>
            : <Article />
            }*/
            </div>
    )
}
}

//export default App  