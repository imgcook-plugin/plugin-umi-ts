/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async (options) => {
  let { data, filePath, config } = options;

  data.code.panelDisplay = data.code.panelDisplay.map((file) => {
    if (/\.jsx$/.test(file.panelName)) {
      file.panelType = "ts";
      file.panelName = file.panelName.replace(/\.jsx$/, ".tsx");
      file.panelValue = file.panelValue.replace(
        /('\.\/images.+')/g,
        (match, p1) => `require(${p1})`
      );
      file.panelValue = file.panelValue.replace("lines={undefined}", "");
      file.panelValue = file.panelValue.replace(
        /.+(\(\\n.+\);\\n).+/,
        (match, p1) => {
          return;
          `import React from 'react';\nimport styles from './style.response';\nexport default () => ${p1}`;
        }
      );
    }
    return file;
  });

  // body...
  return { data, filePath, config };
};

module.exports = (...args) => {
  return pluginHandler(...args).catch((err) => {
    console.log(err);
  });
};
