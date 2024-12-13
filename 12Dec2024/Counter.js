
import React from "react";

export default class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
        this.vinod = this.increment.bind(this); // single copy 
        this.decrease = this.decrement.bind(this); // single copy 
    }
    // method it will create only one copy of object.
    increment(){
        this.setState({counter: this.state.counter+1});
    }
    // lambda function will create multiple copies of objects.it leads to memory issue 
    // decrement = ()=>{
    //     this.setState({counter:this.state.counter - 1});

    // }


    decrement(){
        this.setState({counter: this.state.counter -1 });
    }

    render(){

        return(
            <>
                <h1> Counter : {this.state.counter}</h1>
                {/* <button onClick={this.increment.bind(this)}> + </button>  */}
                <button onClick={this.vinod}> + </button>
                <button onClick={this.decrease}> - </button>
            </>
        )
    }
}