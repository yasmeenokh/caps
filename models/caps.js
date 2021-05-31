'use strict';

const events = require('../events');
const vendor = require('./vendor');
const driver = require('./driver');

events.on('pickup', driver.pickup);
events.on('in-transit', driver.delivered);
events.on('delivered', vendor.thanks);

setInterval(() => {
  vendor.sendFakeOrder();
}, 5000);
  