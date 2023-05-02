const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./lib/shapes.js");

function init() {
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
        choices: ["circle", "triangle", "square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Logo shape color (keyword or hexadecimal)",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      console.log(answers);
      if ((answers.shape == "circle")) {
        fs.writeFile("circleLogo.svg", shape.renderCircle(answers), (err) => {
          err ? console.log(err) : console.log("Success");
        });
      }
      else if ((answers.shape == "triangle")) {
        fs.writeFile("triangleLogo.svg", shape.renderTriangle(answers), (err) => { err ? console.log(err) : console.log("Success")});
      }
      else if ((answers.shape == "square")) {
        fs.writeFile("squareLogo.svg", shape.renderSquare(answers), (err) => {
          err ? console.log(err) : console.log("Success");
        })
      }
    });
}

init();
