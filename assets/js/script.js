"use strict";

const car = {
  color: "black",
  model: "Land Cruiser Prado",
  brand: "Toyota",
  capacity: 5,
  engineCapacity: 300,
  currentSpeed: 0,
  maxSpeed: 250,
};

function Car(color, model, brand, engineCapacity, capacity, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.capacity = capacity;
  this.engineCapacity = engineCapacity;
  this.currentSpeed = 0;
  this.maxSpeed = maxSpeed;
}

const carPrototype = {
  accelerate: function (kmh) {
    if (typeof kmh !== "number" || isNaN(kmh)) {
      throw new TypeError("kmh must be a number");
    }

    if (kmh < 0) {
      throw new RangeError("kmh must not be negative");
    }

    return this.currentSpeed + kmh <= this.maxSpeed
      ? this.currentSpeed += kmh
      : this.currentSpeed = this.maxSpeed;
  },
  deaccelerate: function (kmh) {
    if (typeof kmh !== "number" || isNaN(kmh)) {
      throw new TypeError("kmh must be a number");
    }

    if (kmh < 0) {
      throw new RangeError("kmh must not be negative");
    }

    return this.currentSpeed - kmh >= 0
      ? this.currentSpeed -= kmh
      : this.currentSpeed = 0;
  },
  stop: function () {
    return this.currentSpeed = 0;
  },
};


Car.prototype = carPrototype;
car.__proto__ = carPrototype;

const volkswagen = new Car("green", "jetta", "volkswagen", 400, 5, 190);

const skoda = new Car("blue", "injak", "skoda", 260, 5, 160);