
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

class ComponentLifeCyle extends React.Component{

    constructor(props){
        super(props);
        this.state = {counter :0};
        
       console.log("constructor called");
        

    }

    static getDerivedStateFromProps(){
       
        console.log("GetDerivedStateFromProps called");
        return null; // 
    }


    render(){
        console.log("Render function called");

        return(
            <>
                <h1> Life cycle component</h1>
            </>
        )
    }

    componentDidMount(){
        console.log("Component Did Mount function called");
    }
}

root.render(<ComponentLifeCyle />);