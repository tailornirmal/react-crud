import React , { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

class PostForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            editing: false
        }
        this.baseState = this.state;
    }

    handleChange = (e) => {

        let key = e.target.name;
        let value = e.target.value;

        this.setState({
            [key]:value
        });
    }

    savePost = (e) => {
        e.preventDefault();
        const articleData = {
            id : new Date(),
            title : this.state.title,
            description : this.state.description
        }

        if(articleData.title == '' || articleData.description == '') {
            toast.error('Enter article details.');
            return false;
        }

        this.props.dispatch({
            type : 'ADD_POST',
            payload : articleData
        });
        this.setState(this.baseState);
    }

    render(){
        return (
            <div>
                <h3>Add Article</h3>
                <hr />
                <form>
                    <ToastContainer />
                    <div class="form-group">
                        <label for="articleTitle">Title</label>
                        <input autoComplete="off" type="text" class="form-control" placeholder="Enter Post Title" name="title"  value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="Descriptin">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Post Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button onClick={this.savePost} class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);