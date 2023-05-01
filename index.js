const inquirer = require ("inquirer");
const fs = require ("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Logo Text (up to 3 characters)",
      name: "text",
    },
    {
      type: "input",
      message: "Text color (keyword or hexadecimal)",
      name: "textColor",
    },
    {
      type: "list",
      message: "Choose a logo shape",
      choices:["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "list",
      message: "Logo shape color (keyword or hexadecimal)",
      name: "shapeColor",
    },
  ])

  