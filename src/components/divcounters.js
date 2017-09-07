import React, {Component} from 'react';
import CounterDiv from './counterdiv';

class CounterDivs extends Component{
    constructor(props){
        super(props);
        this.state = {
            div0count: 10,
            div1count: 10
        }
        this.handleClick.bind(this);
    }
    handleClick(){
        if(event.target.name === '0'){
            this.setState({
                div0count: this.state.div0count + 1,
                div1count: this.state.div1count - 1
            });
        }
        else{
            this.setState({
                div0count: this.state.div0count - 1,
                div1count: this.state.div1count + 1
            });
        }
    }
    render(){
        return(
            <div>
                <div name="0" onClick={this.handleClick}>{this.state.div0count}</div>
                <div name="1" onClick={this.handleClick}>{this.state.div1count}</div>
            </div>
        );
    }

}

export default CounterDivs;