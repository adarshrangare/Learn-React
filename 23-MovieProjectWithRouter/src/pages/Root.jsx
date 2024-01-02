import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <nav>
        <Link to="/">Movie Search</Link>
      </nav>
      <main>
        {navigation.state === "loading" ? <h1>Loading...</h1> : <Outlet />}
      </main>
    </>
  );
};

export default Root;
