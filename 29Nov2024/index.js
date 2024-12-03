
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';


const root = ReactDOM.createRoot(document.getElementById("root"));

class Employee extends React.Component{

    static propTypes = {
        "eid" : PropTypes.number,
        "ename" : PropTypes.string,
    }

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <h1> Employee ID {this.props.eid} </h1>
            <h2> Employee Name {this.props.ename}</h2>
            </>
        )
    }


}

root.render(<Employee eid="dinesh" ename="vinod" />);