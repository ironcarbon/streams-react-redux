import React from "react";
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

  renderInput({ input, label }) {
    return (
      <div className="field" >
        <label>{label}</label>
        <input {...input}
        // onChange={formProps.input.onChange} 
        // value={formProps.input.value} 
        />

      </div >
    )
  }

  onSubmitHandler = (formValues) => {
    console.log(formValues);
  }


  render() {
    console.log(this.props)
    return (
      <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmitHandler)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }

}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
