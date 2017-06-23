//Lists and Keys example
import React, {Component} from 'react';
import NumberList from './Component/NumberList';

class Demo6 extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <NumberList numbers={numbers}/>
        )
    }
}
export default Demo6;
