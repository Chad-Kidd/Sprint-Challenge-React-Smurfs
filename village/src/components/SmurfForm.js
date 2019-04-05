import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: {
      name: '',
      age: '',
      height: ''}
    };
  }

  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api

  //   this.setState({
  //     name: '',
  //     age: '',
  //     height: ''
  //   });
  // }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  changeHandler = (event) => {
    console.log("is this thing on")
    event.persist();
    // let value = event.target.value;
    this.setState(prevState => ({
      smurfs: {
          ...prevState.smurfs,
        [event.target.name]: event.target.value,
      }
    }));
  };

handleSubmit = (event) => {
    console.log("what about this")
    event.preventDefault();
    this.props.addSmurf(this.state.smurfs);

    this.setState({
        smurfs: {
            name: "",
            age: "",
            height: ""
          }
    });
};

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurfs.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurfs.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurfs.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
