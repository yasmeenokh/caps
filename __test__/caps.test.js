'use strict';

const faker = require('faker');
const vendor = require('../models/vendor');
const driver = require('../models/driver');

describe('CAPS TEST', ()=>{
  let consoleSpy;
  let order = {
    store : 'JASMINES',
    randomName : faker.name.findName(),
    address : faker.address.city(),
    orderId : faker.datatype.uuid(),
  };
  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  it('should call the pickup event', ()=>{
    vendor.sendFakeOrder(order);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('should console when the driver pickup the order', ()=>{
    driver.pickup(order);
    expect(consoleSpy).toHaveBeenCalled();
  }),
  it('should console when the driver delivers the order', ()=>{
    driver.delivered(order);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('should console a thank you when the driver delivers', ()=>{
    vendor.thanks(order);
    expect(consoleSpy).toHaveBeenCalled();
  });
});