import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor ()
  {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: 'kerstin',
        },
        {
          id: 2,
          name: 'kitty',
        },
        {
          id: 3,
          name: 'eve',
        }
      ]
    }
  }
  render() 
  {
    return (
      <div>
        {
          this.state.data.map((dynamicData, i) =>
          <div style={{ display: 'flex' }}>
            <div style={{ marginLeft: 10 }}>{dynamicData.id}</div>
            <div style={{ marginLeft: 10 }}>{dynamicData.name}</div>
          </div>
          )
        }
      </div>
    )
  }

}

export default App;
