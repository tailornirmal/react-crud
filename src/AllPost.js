import React , { Component } from 'react';
import { connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


class AllPost extends Component {
    renderList = (list) => {
        if (list && list.length > 0) {
            return list.map((post, index) => (
                <div key={post.id}>
                    {
                        post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />
                    }
                </div>
            ));
        }
        return <center>No article available.</center>;
    };

    render(){
        const { posts } = this.props;
        return (
            <div>
                {this.renderList(posts)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state
    }
}
export default connect(mapStateToProps)(AllPost);