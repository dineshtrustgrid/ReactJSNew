import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

class MyComponent extends React.Component{
    
    count = 0; // its normal variable 

    constructor(props){
        super(props);

        this.state = {
            counter : 0,
            count : 1,
            value : 100
        }
    }

    increaseValue(){
        
        this.setState({counter:this.state.counter+1});
        this.setState({count : this.state.count+1}); 
        this.setState({value : this.state.value+1});
    }

    render(){

        return(
            <>
                <h1>testing</h1>
                <h1> count : {this.state.count}</h1>
                <h1>COunter : {this.state.counter}</h1>
                <h1> value  : {this.state.value}</h1>
                <button onClick={this.increaseValue.bind(this)}> Click me !!!</button>
            </>
        )
    }
}

root.render(<MyComponent />);