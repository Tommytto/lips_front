import loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { Preloader } from "../modules/auth/components/Preloader";
import { ChatRouter } from "../modules/chat/routes";

const Loadable404 = loadable({
  loader: () =>
    import("../modules/common/components/NoMatchRoute").then(
      ({ NoMatchRouter }) => NoMatchRouter
    ),
  loading: Preloader
});

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ChatRouter} />
      <Route component={Loadable404} />
    </Switch>
  );
}

export { Router };
