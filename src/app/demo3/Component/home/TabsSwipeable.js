import React, {Component} from 'react';
import {Link} from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MainList from './MainList';
import Constant from '../../utils/Constant';

const styles = {
    nav: {
        position: 'absolute',
        zIndex: '1000',
        width: '100%'
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

class TabsSwipeable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value
        });
    };

    render() {
        const topics = [
            {name: '全部', title: ''},
            {name: '精华', title: 'ask'},
            {name: '分享', title: 'share'},
            {name: '问答', title: 'job'},
            {name: '招聘', title: 'good'}
        ];
        return (
            <div>
                <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.nav}>
                    {topics.map((topic, index)=>
                        <Tab key={index} label={topic.name} value={index}/>
                    )}
                </Tabs>

                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={styles.content}>
                    {topics.map((topic, index)=>
                        <MainList index={this.state.slideIndex} key={index} current_index={index}
                                  url={topic.title == '' ? Constant.API_URL + '/topics' : Constant.API_URL + '/topics/?tab=' + topic.title}></MainList>
                    )}
                </SwipeableViews>
            </div>
        )
    }
}

export default TabsSwipeable;