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
      searchTerm: "",
      FilteredEmployeeData: []
    }
    )
  }

  //Sort by first name 
  sortByFName = () => {
    const sortedEmployees = this.state.items.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }

  //Sort by last name 
  sortByLName = () => {
    const sortedEmployees = this.state.items.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees })
  }



  // handleSearch = function(item) {
  //   if (item.name.first.includes(searchTerm) || item.name.last.includes(searchTerm)) {
  //     return true;
  //   }
  //   return false;
  // }

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
          <Search handleChange={(e) => this.setState({ searchTerm: e.target.value.toLowerCase() })} />
          <EmployeeProfile items={this.state.items} searchTerm={this.state.searchTerm} sortByLName={this.sortByLName} sortByFName={this.sortByFName}/>

        </div>
      )
    }

  }



}

export default App;
