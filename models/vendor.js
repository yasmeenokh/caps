'use strict';
require('dotenv').config();
const events = require('../events');
const faker = require('faker');
const StoreName = process.env.STORE_NAME;
const date = require('date-and-time');
const now = new Date();


function sendFakeOrder(){ 
  let order = {
    store : StoreName,
    // store : faker.commerce.productName(),
    randomName : faker.name.findName(),
    address : faker.address.city(),
    orderId : faker.datatype.uuid(),
  };
  console.log('***********************');
  events.emit('pickup',{
    event : 'pickup',
    date : date.format(new Date(), 'hh:mm A [GMT]Z'),
    payload : order,
  });
}
setInterval(() => {
  sendFakeOrder();
}, 5000);

function thanks(payload){
  setInterval(()=>{
    payload.event = 'delivered';
    payload.date = date.format(new Date(), 'hh:mm A [GMT]Z'),
    console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
    console.log(`EVENT : ${payload}`);
  },3000);
}

module.exports = {thanks, sendFakeOrder};


