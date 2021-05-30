'use strict';

const events = require('./events');
const vendor = require('./models/vendor');
const driver = require('./models/driver');

events.on('pickup', driver.pickup);
events.on('in-transit', driver.delivered);
events.on('delivered', vendor.thanks);

