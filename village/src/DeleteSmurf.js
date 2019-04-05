import React, { Component } from 'react';

class DeleteSmurf extends React.Component {
	constructor(props){
    super(props);
  	this.state = {
      smurfs: [
        {
          name: '',
          age: '',
          height: '',
          id: ''
        }
      ]
    }
  }

  delete(item){
    const newState = this.state.smurfs;
  	if (newState.indexOf(item) > -1) {
    	newState.splice(newState.indexOf(item), 1);
      this.setState({ smurfs: newState})
    }
  }
  render(){
  	const listItem = this.state.smurfs.map((item)=>{
    	return <div key={item.id}>
      	<span>{item.name}</span> <button onClick={this.delete.bind(this, item)}>Delete Smurf</button>
      </div>
    })
  	return <div>
    	{listItem}
    </div>
  }
}
  export default DeleteSmurf;