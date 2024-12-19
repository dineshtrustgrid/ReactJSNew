import React from "react";

export default class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {counter : 0};
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        console.log("Constructor called");

        
    }

    increase(){
        console.log("Increase method is called");
        this.setState({counter: this.state.counter + 1});
    }

    decrease(){
        console.log("decrease method is called");
        this.setState({counter:this.state.counter - 1});
    }

    static getDerivedStateFromProps(props,state){
        console.log("state",state);
        console.log("props",props);
        console.log("GetDerivedStatefromprops");
      // this.state = { counter:this.props.cid};
        // const value = this.`props.cid + 1;
        // console.log("value",value);
        // return only one either state or props
        return state ;
    }

    render(){

        console.log("Render Function called");
        

        return(
            <>
                <h1>counterID : {this.props.cid} </h1>
                <h2> counterName : {this.props.cname}</h2>
                <h3> countervalue :{this.state.counter}</h3>
                <button onClick={this.increase}> + </button>
                <button onClick={this.decrease}> - </button>

            </>
        )
    }


}