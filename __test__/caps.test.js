'use strict';

const faker = require('faker');
const vendor = require('../models/vendor');
const driver = require('../models/driver');

describe('CAPS TEST', ()=>{
  let consoleSpy;
  let order = {
    store : 'JASMINES',
    orderId : faker.datatype.uuid(),
    randomName : faker.name.findName(),
    address : faker.address.city(),
  };
  let payload = {
    event: 'pickup',
    time: new Date().toISOString(),
    payload: order,
  };
  beforeEach(()=>{
    jest.useFakeTimers();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });
  it('should call the pickup event', async ()=>{
    vendor.sendFakeOrder(payload);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('should console when the driver pickup the order', async ()=>{
    driver.pickup(payload);
    setTimeout(()=>{
      expect(consoleSpy).toHaveBeenCalled();
    }, 1000);

  }),
  it('should console when the driver delivers the order', async ()=>{
    driver.delivered(payload);
    setTimeout(()=>{
      expect(consoleSpy).toHaveBeenCalled();
    }, 3000);

  });
  it('should console a thank you when the driver delivers',async ()=>{
    vendor.thanks(payload);
    setTimeout(()=>{
      expect(consoleSpy).toHaveBeenCalled();
    }, 3000);

  });
});