import React, { Component } from "react";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    //The state is a built-in React object that is used to contain data or information about the component.
    //A component's state can change over time; whenever it changes, the component re-renders.
    this.state = {
      employees: [],
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Employee Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName}</td>
                  <td> {employee.lastName}</td>
                  <td> {employee.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
