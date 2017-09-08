import React, {Component} from 'react';

const TextField = props => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input value = {props.value} onChange={props.onChange} name={props.name} type="text" className="form-control"/>
        </div>
    );
}

export default TextField;