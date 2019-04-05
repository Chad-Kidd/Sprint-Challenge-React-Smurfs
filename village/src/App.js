import React, { Component } from 'react';
import axios from "axios"
import { Route, NavLink } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import DeleteSmurf from './DeleteSmurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios 
    .get('http://localhost:3333/smurfs')
    .then(result => {
      this.setState({ smurfs: result.data });
    })
    .catch(error => console.log(`unable to load Data`));
}

    addSmurf = newSmurf => {
      axios
      .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
        this.setState({ smurfs: res.data })
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    }

    updateSmurf = updatedSmurf => {
      axios
        .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
        .then(res => {
          this.setState({ smurfs: res.data });
          console.log(res);
          // redirect
          this.props.history.push("/smurfs");
        })
        .catch(err => {
          console.log(err);
        });
    };
  
  render() {
    return (
      <div className="App">
      <nav>
       <div className="nav-links">
            <NavLink exact to="/">
              SMURFS
            </NavLink>
            <NavLink to="/smurf-form">ADD SMURF</NavLink>
          </div>
        </nav>
        <img
        className="/"
        src="http://www.dlandroid.com/wp-content/uploads/Smurfs%E2%80%99-Village-Apk-Mod.jpg"
        alt=""
      />
       <Route path="/smurf-form"
        render={props => 
        <SmurfForm {...props} 
        addSmurf={this.addSmurf}/>} />
        <DeleteSmurf />
        <Route path="/" render={() => 
        <Smurfs smurfs={this.state.smurfs} />} />
        
      </div>
    );
  }
}

export default App;
