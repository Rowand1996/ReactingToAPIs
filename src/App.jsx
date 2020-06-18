import React, {Component} from 'react';
import './App.css';
import Film from './components/Film.jsx';
require ('es6-promise').polyfill();
require ('isomorphic-fetch');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(obj => this.setState({films:obj}))
    }

    render() {
        return (
            <React.Fragment>
                <Film items={this.state.films} />
            </React.Fragment>
        )
    }
}

export default App;