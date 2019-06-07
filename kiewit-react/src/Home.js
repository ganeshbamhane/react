import React, { useContext } from "react";
import UserContext from "./utils/UserContext";

const Home = () => {
  const user = useContext(UserContext);
  return (
    <center>
      <h1>Welcome {user.firstName} !!</h1>
    </center>
  );
};

export default Home;
