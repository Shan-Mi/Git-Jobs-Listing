import React from "react";
import { Switch, Route } from "react-router-dom";
import FrontPage from "./Pages/FrontPage";
import JobDetailPage from "./Pages/JobDetailPage";
import JobsPage from "./Pages/JobsPage";
import NoJobFound from "./Pages/NoJobFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/jobs/:id" component={JobDetailPage} />
      <Route path="/nojobfound" component={NoJobFound} />
    </Switch>
  );
};

export default App;
