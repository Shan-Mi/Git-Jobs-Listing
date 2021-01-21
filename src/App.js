import React from "react";
import { Switch, Route } from "react-router-dom";
import FrontPage from "./Pages/FrontPage";
import JobDetailPage from "./Pages/JobDetailPage";
import JobsPage from "./Pages/JobsPage";
import NoJobFound from "./Pages/NoJobFound";
import Page404 from "./Pages/Page404";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route
        path="/jobs/:jobtitle"
        render={({ match: { path } }) => (
          <div>
            <Route exact path={path} component={JobsPage} />
            <Route path={`${path}/:id`} component={JobDetailPage} />
          </div>
        )}
      />
      <Route path="/nojobfound" component={NoJobFound} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default App;
