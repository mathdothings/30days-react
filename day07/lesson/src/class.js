class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);

    this.name = "Square";
  }
}

class Triangle extends Rectangle {
  constructor(width, height) {
    super(width, height);

    this.name = "Triangle";
  }

  get area() {
    return (this.width * this.height) / 2;
  }
}

const Classes = {
  Rectangle,
  Square,
  Triangle,
};

export default Classes;
