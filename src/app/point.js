import { clamp } from "./utils";

export class Point {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  clamp(min, max) {
    return new Point(clamp(this.x, min.x, max.x), clamp(this.y, min.y, max.y));
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  mul(amt) {
    return new Point(this.x * amt, this.y * amt);
  };
  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  };
  sub(other) {
    return new Point(this.x - other.x, this.y - other.y);
  };
  flat(other) {
    return new Point(this.x * other.x, this.y * other.y);
  };
  static right() {
    return new Point(1, 0);
  }
  static top() {
    return new Point(0, 1);
  }
}
