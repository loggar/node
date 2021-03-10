import _ from "lodash";

export const dummyFunction = () => {
  return _.camelCase("dummy");
};

/* babel
{
    "presets": [
      ["@babel/preset-env", {
          "modules": "<my module system>"
      }]
    ]
 }
*/
