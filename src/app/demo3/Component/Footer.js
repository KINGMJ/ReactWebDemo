import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';

//引入图标
import HomeIcon from 'material-ui/svg-icons/action/home';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import WriteIcon from 'material-ui/svg-icons/editor/insert-comment';
import PersonIcon from 'material-ui/svg-icons/social/person';

const styles = {
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
};

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            selectedRoute: '/'
        };
    }


    handleSelect = (index, route) => {
        this.setState({selectedIndex: index, selectedRoute: route});
        this.context.router.push(route);
    };


    render() {
        return (
            <Paper zDepth={1} style={styles.footer}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="主页"
                        icon={  <HomeIcon/>}
                        onTouchTap={() => this.handleSelect(0,'/')}
                    />
                    <BottomNavigationItem
                        label="发布"
                        icon={ <WriteIcon/>}
                        onTouchTap={() => this.handleSelect(1,'/post')}
                    />
                    <BottomNavigationItem
                        label="消息"
                        icon={ <NotificationIcon/>}
                        onTouchTap={() => this.handleSelect(2,'/message')}
                    />
                    <BottomNavigationItem
                        label="关于"
                        icon={ <PersonIcon/>}
                        onTouchTap={() => this.handleSelect(3,'/about')}
                    />
                </BottomNavigation>
            </Paper>
        )
    }
}

export default Footer;

Footer.contextTypes = {
    router: React.PropTypes.object
};