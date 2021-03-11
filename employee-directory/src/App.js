import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true

        })
      })
  }

  render() {

    const { items, loading } = this.state

    if (!loading) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div className="container">
          {items.map(item => ( 
            <img src={item.picture.large} alt={item.name.first}/>
          ))}
        </div>
      )
    }
    return (
      <div>

      </div>
    )
  }
}

export default App;
