import React, {Component} from 'react';
import Greeting from './Greeting';

//登录按钮
const LoginButton = (props)=> {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
};

//登出按钮
const LogoutButton = (props)=> {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
};

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }

}


export default LoginControl;
