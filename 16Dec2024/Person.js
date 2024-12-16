
import React from "react";

export default class Person extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor ");
        this.state = {
            counter : 0
        }

        this.increase = this.increase.bind(this);
    }


    increase(){
        console.log("increase function");

        this.setState({counter:this.state.counter + 1});

    }

    static getDerivedStateFromProps(props, state){

        console.log("GetDerivedStateFromPRops function ");
        return null;
    }

    render(){
        console.log("Render function ");

        return(
            <>
                <h1> Props ID  {this.props.id}</h1>
                <h2> props Name {this.props.uname}</h2>
                <h3> counter : {this.state.counter}</h3>
                <button onClick={this.increase}> CLick ME !!!</button>
            </>
        )
    }

    componentDidMount(){

        console.log("COmponentDidMount");
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate");

        if (new Date % 2 === 0)
                return false;    
            return true;        
    }


}

