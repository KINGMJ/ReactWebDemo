import React, {Component} from 'react';
import TopicDetail from './TopicDetail';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
    main: {
        paddingTop: '48px',
        paddingBottom: '36px'
    }
};

class MainList extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadTopicsDetailFromServer = this.loadTopicsDetailFromServer.bind(this);
    }

    loadTopicsDetailFromServer() {
        if (this.props.index == this.props.current_index) {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    this.setState({data: data.data});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }

    componentDidMount() {
        this.loadTopicsDetailFromServer();
    }

    componentDidUpdate() {
        this.loadTopicsDetailFromServer();
    }

    render() {
        let topicsNodes = '';
        if (this.state.data.length != 0) {
            topicsNodes = this.state.data.map(function (topics, index) {
                return (
                    <TopicDetail key={index} {...topics}></TopicDetail>
                );
            });
        }

        return (
            <List style={styles.main}>
                {topicsNodes}
            </List>
        );
    }
}

export default MainList;