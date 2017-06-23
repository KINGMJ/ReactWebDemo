//this.props.children demo
import React, {Component} from 'react';
import NodeList from './Component/NodeList';

class Demo8 extends Component {
    render() {
        return (
            <NodeList>
                <span>香蕉</span>
                <span>苹果</span>
                <span>梨子</span>
            </NodeList>
        )

    }
}
export default Demo8;
