import React, {Component} from 'react';

class NumberList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number, index) =>
            <li key={index}>
                {number}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        )
    }

}

export default NumberList;