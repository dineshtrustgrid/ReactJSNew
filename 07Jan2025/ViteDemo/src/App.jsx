import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    console.log("COmponent didmount Started");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }
  render() {
    console.log("Render function called");
    const { users, loading, error } = this.state;
    if (loading) {
      
      return <h1> Loading ...</h1>;
    }
    if (error) {
      return <h1> Error : {error} </h1>;
    }

    return (
      <>
        <h1> User List : </h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
