'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

const toyota = new VehicleConstructor.Car('Tundra');
console.log(toyota.name, toyota.drive(), toyota.stop());

const kawasaki = new VehicleConstructor.Motorcycle('Ninja');
console.log(kawasaki.name, kawasaki.wheelie(), kawasaki.stop());