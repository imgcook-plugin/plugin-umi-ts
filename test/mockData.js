const fs = require("fs");

module.exports = {
  moduleData: {
    id: 17679,
    name: "hook",
    dsl: "react-standard",
    cover:
      "https://img.alicdn.com/tfs/TB1mkjeqlr0gK0jSZFnXXbRRXXa-1404-1292.png",
  },
  code: {
    panelDisplay: [
      {
        panelName: "index.jsx",
        panelValue: JSON.stringify(
          fs.readFileSync("./demo36720/index.jsx", { encoding: "utf-8" })
        ),
        panelType: "js",
      },
      {
        panelName: "style.js",
        panelValue: JSON.stringify(
          fs.readFileSync("./demo36720/style.js", { encoding: "utf-8" })
        ),
        panelType: "js",
      },
      {
        panelName: "style.less",
        panelValue: JSON.stringify(
          fs.readFileSync("./demo36720/style.less", { encoding: "utf-8" })
        ),
        panelType: "less",
      },
      {
        panelName: "style.responsive.js",
        panelValue: JSON.stringify(
          fs.readFileSync("./demo36720/style.responsive.js", {
            encoding: "utf-8",
          })
        ),
        panelType: "js",
      },
    ],
    noTemplate: true,
  },
};
