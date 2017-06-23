/**
 * 官方CommentBox demo
 */
import React, {Component} from 'react';
import CommentBox from './Component/CommentBox';

class Demo1 extends Component {
    render() {
        let url = "/api/test/comments";
        return <CommentBox url={url}/>
    }
}
export default Demo1;
