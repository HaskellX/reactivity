import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import axios from "axios";



class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        console.log(response)
        this.setState({
        values: response.data
      })
    })
  }

  render(){
    return (
      <div>

<List>
{this.state.values.map((value : any) => (
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
  </List>


          <Header as='h2'>
    <Icon name='settings' />
    <Header.Content>
      Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
    </Header.Content>
  </Header>

          
      </div>
    );
  }
}

export default App;
