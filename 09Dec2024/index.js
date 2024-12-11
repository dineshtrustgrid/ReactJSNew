// import {React} from 'react';
// import  {ReactDOM} from 'react-dom/client';

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <h1>Hello vinod !!! </h1>
// root.render(element);

class Vinod extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    console.log("state value:", this.state);
    // console.log("array value", this.state.date.getFullYear())

   
    return (
      <>
        <h1> Current Date and Time : {this.state.date.toString().split(" ")}</h1>

        <h2>ID : {this.props.id}</h2>
        <h2> Name : {this.props.name}</h2>

        {/* <h3> {dateArray}</h3> */}

      </>
    );
  }
}
root.render(<Vinod id={123} name="VKG" />);
