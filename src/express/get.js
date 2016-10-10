"use strict";

const serialize = require('../serializers/json');

module.exports = function get(req, res) {
  let pin = req.pin;
  let gpio = req.app.locals.gpio;

  let status = gpio.read(pin);
  let result = serialize(pin, status);
  res.json(result);
}