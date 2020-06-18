import React from 'react';

const Person = (props) => {
    let moviePeople = props.items.map((person) => {
        let idLink = "https://ghibliapi.herokuapp.com/people/" + person.id;
        return (
            <div key={person.id} className="card bg-info">
                <div className="card-header">
                    Person Name: <a rel="noopener noreferrer" target="_blank" href={idLink}>{person.name}</a>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Gender: {person.gender}</p>
                        <footer className="blockquote-footer text-dark">Person Age: {person.age}<cite title="Source Title"></cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    });

    return (
        <div>
            {moviePeople}
        </div>
    );
}

export default Person;