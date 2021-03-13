import './App.css';
import React, { Component } from 'react';
import Api from "./components/utils/API";
import EmployeeProfile from "./components/Data/EmployeeProfile";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: false
      
    }
  }

  
  async componentDidMount() {
      const employeeData = await Api
      this.setState({
        items: employeeData,
        loading: true,
        searchTerm: ""

      })
  }

  render() {

    const { items, loading } = this.state
// console.log(this.state.items);
    if (!loading) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div className="container">
          <Search handleChange={(e) => this.setState({searchTerm: e.target.value.toLowerCase()})}/>
          <EmployeeProfile items={this.state.items} searchTerm={this.state.searchTerm}/>

        </div>
      )
    }
    
  }
}

export default App;
