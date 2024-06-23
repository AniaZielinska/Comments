import React, {Component} from 'react'
import './comments.css'
import './AddComment.js'
import AddComment from "./AddComment";

class Comments extends Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            showForm: false,
            comments: [
            {
                "name": "John Smith",
                "text": "This is an awesome page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                "time": "Oct 02, 2019",
                "comments": [
                    {
                        "name": "Karen Michaels",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                        "image": "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
                        "time": "Oct 10, 2019"
                    },
                    {
                        "name": "Tim Parker",
                        "text": "Tullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
                        "image": "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&w=200&q=80",
                        "time": "Oct 05, 2019"
                    }
                ]
            },
            {
                "name": "Sarah James",
                "text": "Nice! Nullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
                "image": "https://images.unsplash.com/photo-1552607676-17f088307dce?auto=format&fit=crop&w=200&q=80",
                "time": "Sept 22, 2019"
            }]
        }
    }

    displayComment(index) {
        const comment = this.state.comments[index]

        //TODO add pictures
        return(
            <div className="comment">
                <table>
                    <tr class='bigrows'>
                        <img class='picture' src={comment.image} alt="image"/>
                    </tr>
                    <tr>
                        <td><h4>{comment.name}</h4></td>
                    </tr>
                    <tr>
                        <td><p>{comment.time}</p></td>
                    </tr>
                    <tr>
                        <td><p>{comment.text}</p></td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => this.addComment(index)}>Replay!</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    displaySubComment(index) {
        const comment = this.state.comments[0].comments[index]

        return(
            <div>
                <table className="subcomment">
                    <tr>
                        <td><img className='picture' src={comment.image} alt="image"/></td>
                    </tr>
                    <tr>
                        <td><h4>{comment.name}</h4></td>
                    </tr>
                    <tr>
                        <td>{comment.time}</td>
                    </tr>
                    <tr>
                        <td>{comment.text}</td>
                    </tr>
                </table>
            </div>
        )
    }

    displayCommentForm() {
        return (
            <div>
                <h3>Add comment</h3>
                {this.displayErrors()}
                Name : <input id="name" type="text" onBlur={this.validateNameOnBlur.bind(this)}/><br/>
                Comment : <textarea id="comment" onBlur={this.validateCommentOnBlur.bind(this)}/><br/>
                <button onClick={this.submitForm}>Submit</button>
                <br/>
            </div>
        )
    }

    validateNotEmpty(field, value) {
        if (value.length <= 0) {
            return `${field} must be filled out!`
        }
    }

    validateNameOnBlur(event) {
        const name = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateNotEmpty("Name", name)

        if (validate_result)
        {
            errors.push(validate_result)
        }

        this.setState({errors})
        return {name, errors}
    }

    validateCommentOnBlur(event) {
        const comment = event.target.value
        const errors = this.state.errors

        var validate_result =  this.validateNotEmpty("Comment", comment)

        if(validate_result)
        {
            errors.push(validate_result)
        }

        this.setState({errors})
        return {comment, errors}
    }

    displayErrors()
    {
        return (
            <div>
                {this.state.errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        )
    }

    submitForm() {
        console.log("Submitted!")
        alert("Submitted!")
    }

    addComment(index) {
        this.setState({showForm: !this.state.showForm})
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                {this.displayComment(0)}
                {this.state.showForm && this.displayCommentForm()}
                {this.displaySubComment(0)}
                {this.displaySubComment(1)}
                {this.displayComment(1)}
                {this.state.showForm && this.displayCommentForm()}
            </div>
        )
    }
}


export default Comments;