import React, {component} from 'react';
import '../App.css';
require ('es6-promise').polyfill();
require ('isomorphic-fetch');

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(obj => console.log(obj))
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello world from app.jsx</h1>
            </React.Fragment>
        )
    }
}

export default App;