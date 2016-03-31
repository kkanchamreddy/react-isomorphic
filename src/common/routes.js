import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

//Redux Smart
import CounterPage from "./containers/CounterPage";
//import RedditPage from "./containers/RedditPage";
import TodoPage from "./containers/TodoPage";
import ImgurPage from "./containers/ImgurPage";

//Redux Dumb
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import error404 from "./components/404";

function lazyLoadComponent(component) {

  return function(location, cb) {
    require.ensure([], function (require) {
      cb(null, require(component));
    });
  }
}

export default (
  <Route name="app" path="/" component={App}>
      <Route path="home" component={HomePage} />
      <Route path="reddit" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./containers/RedditPage').default);
        });
      }}
      />
      <Route path="imgur" component={ImgurPage} />
      <Route path="todo" getComponent={(location, cb) => {
            cb(null, TodoPage)
      }} />
      <Route path="counter" component={CounterPage} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={error404}/>
  </Route>
);
