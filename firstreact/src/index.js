import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App";
import App3 from "./App3";

const rootElement = document.getElementById("root");
let count = -1,
  count2 = 10,
  cycle = 0;
setInterval(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <App
          count={(() => {
            if (cycle === 0) {
              count++;
              if (count >= 10) {
                cycle = 1;
              }
              return count;
            } else {
              count--;
              if (count <= 0) {
                cycle = 0;
              }
              return count;
            }
          })()}
        />
        <App2
          count={(() => {
            if (cycle === 0) {
              return count2--;
            } else {
              return count2++;
            }
          })()}
        />
        <App3 />
      </React.StrictMode>,
      rootElement
    ),
  1000
);
