"use strict";

const car = {
  color: "black",
  model: "Land Cruiser Prado",
  brand: "Toyota",
  capacity: 5,
  currentSpeed: 0,
  maxSpeed: 250,
};

function Car(color, model, brand, capacity, currentSpeed, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.capacity = capacity;
  this.currentSpeed = currentSpeed;
  this.maxSpeed = maxSpeed;
}

const carPrototype = {
  accelerate: function (kmh) {
    if (typeof kmh !== "number" || isNaN(kmh) || kmh < 0) {
      return null;
    }

    return this.currentSpeed + kmh <= this.maxSpeed
      ? this.currentSpeed += kmh
      : this.currentSpeed = this.maxSpeed;
  },
  deaccelerate: function (kmh) {
    if (typeof kmh !== "number" || isNaN(kmh) || kmh < 0) {
      return null;
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

const volkswagen = new Car("green", "jetta", "volkswagen", 5, 0, 190);

const skoda = new Car("blue", "injak", "skoda", 5, 0, 160);
