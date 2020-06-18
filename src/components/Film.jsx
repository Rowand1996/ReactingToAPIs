import React from 'react';

const Film = (props) => {
    let filmItems = props.items.map((film) => {
        return (
            <div key={film.id} className="card">
                <div className="card-header">
                    Movie Title: {film.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{film.description}</p>
                        <footer className="blockquote-footer">Movie Director: {film.director}<cite title="Source Title"></cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    });

    return (
        <div>
            {filmItems}
        </div>
    );
}

export default Film;