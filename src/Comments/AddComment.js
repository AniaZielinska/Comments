import React from "react";

const AddComment = props =>
    <div>
        <h3>Add comment</h3>
        {this.displayErrors()}
        Name : <input id="name" type="text" onBlur={this.validateNameOnBlur.bind(this)}/><br/>
        Comment : <input id="comment" type="text" onBlur={this.validateCommentOnBlur.bind(this)}/><br/>
        <button onClick={this.submitForm}>Submit</button>
        <br/>
    </div>


export default AddComment;