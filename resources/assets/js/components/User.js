import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class User extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data :[]
    }
  }
  componentWillMount(){
    axios.get('/api/users').then(e=>{
      //console.log(e,'e');
      this.setState({data:e.data});
    })
  }
  render() {
    const {data} = this.state;
    return(
      <div>
        <h2>Users List</h2>
        <table className="table bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(e=>(
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <a href="" className="btn btn-primary">
                    Edit
                  </a>
                   |
                  <a href="" className="btn btn-danger">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

if (document.getElementById('abc')) {
    ReactDOM.render(<User />, document.getElementById('abc'));
}
