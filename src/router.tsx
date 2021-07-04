import React from "react";
import { Route, Switch } from "react-router";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <div>
      <Switch>
        {<Route exact path={"/"} component={Home} />}
        {<Route exact path={"/Services"} component={Services} />}
        {<Route exact path={"/Work"} component={Work} />}
        {<Route exact path={"/Contact"} component={Contact} />}
      </Switch>
    </div>
  );
};

export default Router;
