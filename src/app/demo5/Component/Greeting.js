import React, {Component} from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return <div>User Greeting.</div>
        } else {
            return <div>Guest Greeting.</div>
        }
    }
}

export default Greeting;