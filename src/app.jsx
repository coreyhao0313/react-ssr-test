import React from "react";
import { StaticRouter } from "react-router-dom";

import Routes from "./router.jsx";

export const App = ({ content }) => {
  return (
    <html>
      <head></head>
      <body>
        <textarea cols="30" rows="10"></textarea>
        <div id="root">
          { content }
        </div>
        <script src="bundle.client.js"></script>
      </body>
    </html>
  );
}

export default ({ path }) => {
  return (
    <App content={
      <StaticRouter location={path}>
          <Routes />
      </StaticRouter>
    } />
  );
};