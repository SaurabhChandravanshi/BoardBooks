import React from 'react';

export default function HomeCardItem(props) {
    return (
        <>
            <div className="card mb-3">
                
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.items[0]}</li>
                    <li className="list-group-item">{props.items[1]}</li>
                </ul>
            </div>
        </>
    );
}
