'use strict';

const events = require('../events');


function pickup(payload){
  setInterval(()=>{
    console.log('EVENT ', payload);
    console.log(`DRIVER: picked up ${payload.payload.orderId}`);
    events.emit('in-transit', payload);
    console.log('in-transit ', payload);
  }, 1000);
}

function delivered(payload){
  setInterval(()=>{
    console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
    console.log('DELIVERED ', payload);
    events.emit('delivered', payload);
  }, 3000);
}

module.exports = {pickup, delivered};

