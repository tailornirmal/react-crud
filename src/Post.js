import React , { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

    removeArticle = (e) => {
        this.props.dispatch({
            type : 'DELETE_POST',
            id : e.target.id
        });
    }

    updateArticle = (e) => {
        this.props.dispatch({
            type : 'EDIT_POST',
            id : e.target.id
        });
    }
    render(){
        return (
            <div>
                <div class="list-group-item list-group-item-action flex-column align-items-start marginTop">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{this.props.post.title}</h5>
                        </div>
                        <hr/>
                        <p class="mb-1">{this.props.post.description}</p>
                        <button type="button" class="btn btn-light" id={this.props.post.id} onClick={this.updateArticle}>Update</button>
                        <button type="button" class="btn btn-light spaceRight" id={this.props.post.id} onClick={this.removeArticle}>Remove</button>
                </div>
            </div>
        );
    }
}

export default connect()(Post);