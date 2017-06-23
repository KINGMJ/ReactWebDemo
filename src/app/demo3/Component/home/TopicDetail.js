import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class TopicDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                primaryText={this.props.title}
                leftAvatar={<Avatar src={this.props.author.avatar_url}/>}
            />
        );
    }
}

export default TopicDetail;