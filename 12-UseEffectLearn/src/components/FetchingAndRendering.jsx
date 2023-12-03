import { useState, useEffect } from "react";
import User from "./User";
// fetchDataComponent will render
// useEffect with empty dependancy array to call only one time

const url = "https://jsonplaceholder.typicode.com/users";

const FetchingAndRendering = () => {
  console.log("Fetch Data Component");

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function getData() {
    setIsLoading(true);
    const res = await fetch(url);

    if (!(res.status >= 200 && res.status <= 299)) {
      setIsError(true);
    }

    const data = await res.json();

    console.log(data);
    setApiData(data);
    setIsLoading(false);
  }

  useEffect(() => {
    console.log("fetching data...");
    getData();
  }, []);

  if (isError) {
    return <p> Server is Busy, Please Try again Sometime later.. Thank You</p>;
  }

  if (isLoading) {
    return (
      <>
        {" "}
        <h1>Users List</h1>
        <p>Data is Loading... Please Wait...</p>{" "}
      </>
    );
  }

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {apiData.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </ul>
    </>
  );
};

export default FetchingAndRendering;
