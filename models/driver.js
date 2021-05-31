'use strict';

const events = require('../events');


function pickup(payload){
  console.log('EVENT ', payload);
  console.log(`DRIVER: picked up ${payload.payload.orderId}`);
  setTimeout(()=>{
    events.emit('in-transit', payload);
  },1000);
}

function delivered(payload){
  payload.event = 'in-transit';
  console.log('in-transit', payload);
  setTimeout(()=>{
    console.log(`DRIVER: delivered up ${payload.payload.orderId}`);
    events.emit('delivered', payload);
    console.log('DELIVERED ', payload);
  }, 3000);
}

module.exports = {pickup, delivered};

