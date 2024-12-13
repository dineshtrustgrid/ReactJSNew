
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

class StateComponent extends React.Component{

    constructor(props){
        super(props);
        // initialize the state value in constructor
        this.state = { count : 0 };
    }

     increase(){
        this.setState({count : this.state.count +1 }); 
        // update the value setState() is a function
     }
     
     showmessage = ()=>{

        console.log("Show message ")
        return ("Show message")
     
        
        
     }
     render(){
        
    return(
        <>
        <h1> {this.state.count} Times clicked </h1>
        <button onClick={this.increase.bind(this)}> Hit Me !!!</button>

        <h1> {this.showmessage()}</h1>
        
        </>
    )
}

}
root.render(<StateComponent  />);


