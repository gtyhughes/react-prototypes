import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random()*1000 + 1);
const greeting = (user) => {
    return (
        <div className="container" >
            <h1>Hello {user.name}</h1>
            <h2 className="text-muted">Your lucky number is {user.luckyNum}</h2>
        </div>
    );
}

const user = {
    name: "Mugatu",
    luckyNum: luckyNumber(),
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
