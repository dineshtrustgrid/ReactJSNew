// fetch API

// fetch returns promise object 

// const vinod = fetch("https://www.google.com");
// console.log("vinod", vinod);

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(response =>{
    const {status} = response;
    if(status >= 200 && status < 300 ){
        console.log(" success",status);
        
    }
    else if(status>=400 && status < 500){
        console.log("client error",status);
    }
    else if (status >= 500){
        console.log("server error", status);

    }
    else{
        console.log("unexpected status",status);
    }

    return response.json();
})
.then(data => console.log("responsedata",data))
.catch(error => console.log("error",error));

