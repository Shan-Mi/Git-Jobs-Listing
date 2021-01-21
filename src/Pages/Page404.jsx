import React from "react";
import { useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();

  return (
    <div>
      <p>Page does not exist!</p>
      <button onClick={() => history.push("/")}>Go back to search page</button>
    </div>
  );
};

export default Page404;
