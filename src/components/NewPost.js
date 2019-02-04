import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createPost } from "../store/actions/index";
import { Input } from "../styles/List";

class NewPost extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <Input>
          <label>{field.label}</label>
        </Input>
        <input className="form-control  " type="text" {...field.input} />
        <div className="text-danger">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="form-row">
          <div className="col ml-5 mr-3">
            <Field label="Title" name="title" component={this.renderField} />
          </div>

          <div className="col mr-5 ml-3">
            <Field
              label="Categories"
              name="categories"
              component={this.renderField}
            />
          </div>
        </div>
        <div className="ml-5 mr-5 size ">
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-secondary m-auto">
            Submit
          </button>
          <Link to="/">
            <button className="btn btn-danger ml-4">Cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}

//Validation

function validate(values) {
  const errors = {};

  //validade the input from values
  if (!values.title || values.title.lenght < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  //if errors is empty, the form is fine to submit

  //if errors has any properties, redux form assumes form is
  //invalid

  return errors;
}

export default reduxForm({
  validate,
  form: "PostNewForm"
})(
  connect(
    null,
    { createPost }
  )(NewPost)
);
