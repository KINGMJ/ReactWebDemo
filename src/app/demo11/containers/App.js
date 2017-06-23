import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increaseAction, decreaseAction} from '../actions/index';
import Counter from '../components/Counter';

class App extends Component {
    render() {
        const {count, actions}=this.props;
        return (
            <Counter count={count} {...actions}/>
        )
    }
}


function mapStateToProps(state) {
    return {count: state.count}
}

//这里使用了bindActionCreators，组件中通过属性扩展运算符{...actions}将increaseAction和decreaseAction传递到子组件中
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            increaseAction: increaseAction,
            decreaseAction: decreaseAction
        }, dispatch)
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
