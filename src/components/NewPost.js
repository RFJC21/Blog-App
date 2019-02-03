import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class NewPost extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
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
        1
        <div className="text-center">
          <button type="submit" className="btn btn-secondary m-auto">
            Submit
          </button>
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
})(NewPost);
