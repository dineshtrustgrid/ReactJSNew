
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));



// Header Function Component 
const Header = () => {

    return(
       
            <div className="header">
                <div className="log-container">
                    <img className ="logo" src="https://img.icons8.com/color-glass/48/deliver-food.png" />
                </div>

                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>    
                        <li>Contact Us</li>  
                        <li>Cart</li>                                 
                    </ul>
                </div>

            </div>
      
    )
}

const AppLayout = () =>{

    return(
        <div className="app">
            <Header />
        </div>
    )

}

root.render(<AppLayout />);