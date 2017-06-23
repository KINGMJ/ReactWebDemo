import React, {Component} from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    rawMarkup() {
        let md = new Remarkable();
        let rawMarkup = md.render(this.props.children.toString());
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
            </div>
        );
    }
}

export default Comment;