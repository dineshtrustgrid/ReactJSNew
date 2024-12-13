
import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));

class Student extends React.Component{

    constructor(props){
        super(props);  // super(props) store the props inside the Object . so that we can use it 
        // within code anywhere 

        //console.log("props",props);
    }

    render(){
        console.log("props",this.props);
        return(
            <>
                <h1> {this.props.id}</h1>
                <h2> {this.props.sname}</h2>
            </>
        )
    }

}
// root.render(<Student id="101" sName="dinesh"/>);
root.render(new Student({id:"101", sname:"vinod"}).render());


