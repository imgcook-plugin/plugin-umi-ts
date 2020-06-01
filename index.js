/**
 * @name plugin example
 * @param option: { data, filePath, config }
 * - data: module and generate code Data
 * - filePath: Pull file storage directory
 * - config: cli config
 */

const pluginHandler = async (options) => {
  let { data, filePath, config } = options;

  data.code.panelDisplay = data.code.panelDisplay
    .map((file) => {
      if (/\.jsx$/.test(file.panelName)) {
        file.panelType = "ts";
        file.panelName = file.panelName.replace(/\.jsx$/, ".tsx");
        file.panelValue = file.panelValue.replace(
          /('\.\/images.+')/g,
          (match, p1) => `require(${p1})`
        );
        file.panelValue = file.panelValue.replace(/lines={undefined}/g, "");
        file.panelValue = file.panelValue.replace(
          /^(.|\n)+(\s\((.|\n)+\)\;)(.|\n)+$/g,
          (match, p1, p2) => {
            return `import React from 'react';\nimport styles from './style.response';\n\nexport default () => {\n\treturn${p2}\n};`;
          }
        );
      }

      if (/\.responsive\.js$/.test(file.panelName)) {
        file.panelType = "ts";
        file.panelName = file.panelName.replace(/\.js$/, ".ts");
        file.panelValue = file.panelValue.replace(
          /((.|\n)+)(\};)/g,
          (match, p1, p2, p3) =>
            `import { CSSProperties } from 'react';\n\n${p1}\n} as {\n\t[key:string]: CSSProperties\n};`
        );
      }
      return file;
    })
    .filter((file) => !["style.js", "style.less"].includes(file.panelName));

  // body...
  return { data, filePath, config };
};

module.exports = (...args) => {
  return pluginHandler(...args).catch((err) => {
    console.log(err);
  });
};
