import React , { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

class EditComponent extends Component {

    componentWillMount() {
        this.setState({
            title : this.props.post.title,
            description : this.props.post.description
        });
    }
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        this.setState({ [key]:value });
    }

    updatePost = (e) => {
        e.preventDefault();
        const articleData = {
            title : this.state.title,
            description : this.state.description
        }

        if(articleData.title == '' || articleData.description == '') {
            toast.error('Enter article details.');
            return false;
        }
        
        this.props.dispatch({
            type : 'UPDATE',
            id : this.props.post.id,
            data : articleData

        });
        this.setState(this.baseState);
    }
    render(){
        const { post } = this.props;
        return (            
            <div>
                <ToastContainer />
                <h3>Update Article</h3>
                <hr />
                <form>
                    <div class="form-group">
                        <label for="articleTitle">Title</label>
                        <input autoComplete="off" type="text" class="form-control" placeholder="Enter Post Title" name="title"  value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="Descriptin">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Post Description" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button onClick={this.updatePost} class="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}

export default connect()(EditComponent);