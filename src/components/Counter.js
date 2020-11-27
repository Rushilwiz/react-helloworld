import React from "react";

export class Counter extends React.Component {
    state = {
      count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count-1
        })
    }


    render () {
      return (
        <div>
            <div>count: {this.props.count}</div>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
        </div>
      )
    }
}