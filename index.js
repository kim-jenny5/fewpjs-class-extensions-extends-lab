class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get countSides() {
    return this.arr.length;
  }

  get perimeter() {
    return this.arr.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.arr.length === 3) {
      const first = this.arr[0] + this.arr[1];
      const second = this.arr[1] + this.arr[2];
      const third = this.arr[0] + this.arr[2];
      return first > this.arr[2] && second > this.arr[0] && third > this.arr[1]
        ? true
        : false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.arr.length === 4) {
      let yesOrNo;
      for (let num of this.arr) {
        if (num === this.arr[0]) {
          yesOrNo = true;
        } else {
          yesOrNo = false;
          break;
        }
      }
      return yesOrNo;
    }
  }

  get area() {
    if (this.isValid) return this.arr[0] ** 2;
  }
}
