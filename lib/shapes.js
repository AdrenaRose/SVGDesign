class shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class triangle extends shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}

class circle extends shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}

class square extends shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor);
    this.shape = shape;
  }
}

function renderCircle(circle) {
  return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text>
  </svg>`;
}

function renderTriangle(triangle) {
  return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="150" cy="100" r="80" fill="${triangle.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text>
  </svg>`;
}

function renderSquare(square) {
  return `<svg
    version="1.1"
    width="300"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="50" y="20" width="150" height="150" fill="${square.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text>
  </svg>`;
}

module.exports = {
  renderCircle,
  renderTriangle,
  renderSquare,
};