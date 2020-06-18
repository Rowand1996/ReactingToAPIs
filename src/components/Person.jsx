import React from 'react';

const Person = (props) => {
    let moviePeople = props.items.map((person) => {
        return (
            <div key={person.id} className="card">
                <div className="card-header">
                    Person Name: {person.name}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Gender: {person.gender}</p>
                        <footer className="blockquote-footer">Person Age: {person.age}<cite title="Source Title"></cite></footer>
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