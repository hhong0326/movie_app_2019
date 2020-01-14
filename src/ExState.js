import React from 'react';

export default class ExState extends React.Component {

    state = {
        count: 0
    };

    add = () => {
        this.setState(current => ({ count: current.count+1 }));
    };

    minus = () => {
        this.setState(current => ({ count: current.count-1 }));
    };
    
    componentDidMount() {
        console.log('i randered');
    }

    componentDidUpdate() {
        console.log('i just updated');
    }

    componentWillUnmount() {

    }
    
    render() {
        console.log('i am randering')
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}