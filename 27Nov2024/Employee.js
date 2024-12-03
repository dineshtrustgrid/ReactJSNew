import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

class Employee extends React.Component{

    

    constructor(props){
        super(props)
       
    }

    render(){

        

        return(
            <>
            
            <h2>{this.props.eid}</h2>
            <h2>{this.props.eName}</h2>

            </>

        )
    }

}

root.render(<Employee eid="123" eName="Vinod GOwda"/>);