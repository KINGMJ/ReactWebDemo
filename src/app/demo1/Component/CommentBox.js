import React, {Component} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component{
    //es6不能使用getInitialState来初始化state
    constructor(props) {
        super(props);
        this.state = {data: []};
        //通过bind绑定this
        this.loadCommentsFromServer=this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
    }


    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    handleCommentSubmit(comment) {
        let comments = this.state.data;
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    render(){
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }
}

export default CommentBox;