import React from "react";

export default class App extends React.Component{
    //console.log("THis props"); this gives error because its independent statement 
    // and it should present in function or method or constructor not outside.
    // this is rule in programming language.
    constructor(props){
        super(props);
        this.state = { counterOne : 0,counterTwo:2,counterThree:3};
        console.log("props",this.props);
        console.log("state",this.state);
        console.log("this Props state");
    }

    render(){
       
        const { id,cname,location} = this.props; // Object destructing 
        const {counterOne,counterTwo} = this.state // Object destructing

        return(
            <>
            <h1> Id {id}</h1>
            <h2> Name is {cname}</h2>
            <h3> Location is {location}</h3>
            <h1> CounterOne : {counterOne}</h1>
            <h2> CounterTwo : {counterTwo}</h2>
            </>
        )
    }
}