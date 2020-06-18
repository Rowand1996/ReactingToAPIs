import React, { Component } from 'react';
import './App.css';
import Film from './components/Film.jsx';
import Person from './components/Person.jsx';
import Logo from "./logo.png";
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: []
        }
    }

    // componentDidMount() {

    // }

    loadFilms = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(obj => this.setState({ films: obj }))
            .then(this.setState({people: []}))
    }

    loadPeople = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(obj => this.setState({ people: obj }))
            .then(this.setState({films: []}))
    }

    render() {
        return (
            <React.Fragment>
                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>
                <div className="buttonDiv">
                    <button onClick={this.loadFilms} type="button" className="btn btn-info">Load Films</button>
                    <button onClick={this.loadPeople} type="button" className="btn btn-info">Load People</button>
                </div>

                <Film items={this.state.films} />
                <Person items={this.state.people} />
            </React.Fragment>
        )
    }
}

export default App;