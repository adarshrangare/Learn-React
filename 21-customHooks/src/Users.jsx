import React from "react";
import useFetch from "./hooks/useFetch";

const Users = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, isPending, error } = useFetch(url);

  if (isPending) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error.message} Something Went Wrong...</h2>;
  }

  return (
    <div>{data && data.map((item) => <li key={item.id}>{item.name}</li>)}</div>
  );
};

export default Users;
