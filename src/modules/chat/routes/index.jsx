// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import loadable from "react-loadable";
import { Preloader } from "../../auth/components/Preloader";

const LoadableChatList = loadable({
  loader: () =>
    import("../containers/ChatList").then(({ ChatList }) => ChatList),
  loading: Preloader
});

function ChatRouter() {
  return (
    <Switch>
      <Route path="/" component={LoadableChatList} />
    </Switch>
  );
}

export { ChatRouter };
