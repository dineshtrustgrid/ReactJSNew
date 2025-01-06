
// export default const Employee = () =>{ console.log("Function")};

// export default Employee;

// export default for function component is not applicable in line 2 and its shows error instead 
// we have to declare the function first and then export default.

// function itself is render().

// function definition / function declaration export default if we defined in function declaration ,ther own be any issue
// if it is Fat arrow function  ()=> then this will not applicable.
 // "use strict";

// export default function Employee(props){
//     console.log("props",props);
//     console.log("this",this);
//     const {eid, ename } = props; // here we are not writing this.props because of functional component
//                                  // this is point to window object
//     return(
//         <>
//             <h1> EMployee Information </h1>
//             {/* <h2> EMployee Details : EMployee ID {this.props.eid} </h2>
//             <h3> EMployee Name : {this.props.ename}</h3> */}

//             {/* <h4> EMployee ID : {props.eid}</h4>
//             <h5> Employee Name : {props.ename}</h5> */}
//         </>
//     )

// }

// //export default Employee;

// this keyword is point to Window Object ,window object doesnot have EId ,EName
// props is belongs to Employee Object ,it has eid, ename ,that's why we are accessing through 
// {props.eid}, {props.ename}

// In function component always pass props as parameter in function declaration /function defnition / Fat Arrow function 
// In Fat arrow function , this keyword doesnt ,have it own lexical environment.

const EmployeeOne = (props) => {

   console.log("props",props);
    
    const {eid, ename } = props; 

    return(
        <>
             <h4> EMployee ID : {props.eid}</h4>
            <h5> Employee Name : {props.ename}</h5>

        </>
    )

}

export default EmployeeOne ;