import React, {Component} from 'react';

class NodeList extends Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, (child, index)=> {
                        return <li key={index}>{child}</li>
                    })
                }
            </ol>
        )
    }
}

export default NodeList;