import React from "react";

import { useState } from "react";

const FetchAsyncAPI = async () => {
  const [data, setData] = useState(null);
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const { status } = response;
    if (status >= 200 && status < 300) {
      console.log(" success", status);
    } else if (status >= 400 && status < 500) {
      console.log("client error", status);
    } else if (status >= 500) {
      console.log("server error", status);
    } else {
      console.log("unexpected status", status);
    }

    const jsondata = await response.json();
    setData(jsondata);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <h1> This fetch APi data</h1>
      {/* {data.map((value)=>(
        <ul key={value.id}>
        {value.title}

        </ul>
    ))} */}

      {data ? (
        <ul>
          <li key={data.id}> User ID :{data.userId}</li>
          <li> ID : {data.id}</li>
          <li> TItle : {data.title}</li>

          <li> BOdy : {data.body}</li>
        </ul>
      ) : (
        "Nodata"
      )}
    </>
  );
};

export default FetchAsyncAPI;
