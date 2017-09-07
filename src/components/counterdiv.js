import React, {Component} from 'react';

class CounterDiv extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter = 10;
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
           counter: nextProps.counter
        });
    }
    render(){
        return(
          <div>
              {this.state.counter}
          </div>
        );
    }

}

export default CounterDiv;