import i2c = require('i2c-bus');
import { delay } from "./utils/delay";

(async () => { 
  console.log('i2C-sample started')
  const smb = await i2c.openPromisified(2);
  while (true) {
    try {
      while (true) {
        await smb.i2cWrite (0x20, 1, Buffer.from([0x55]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0x55]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0x55]));
        await delay(1000);
        await smb.i2cWrite (0x20, 1, Buffer.from([0xAA]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0xAA]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0xAA]));
        await delay(1000);
        await smb.i2cWrite (0x20, 1, Buffer.from([0xFF]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0xFF]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0xFF]));
        await delay(500);
        await smb.i2cWrite (0x20, 1, Buffer.from([0x00]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0x00]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0x00]));
        await delay(500);
        await smb.i2cWrite (0x20, 1, Buffer.from([0xFF]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0xFF]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0xFF]));
        await delay(500);
        await smb.i2cWrite (0x20, 1, Buffer.from([0x00]));
        await smb.i2cWrite (0x22, 1, Buffer.from([0x00]));
        await smb.i2cWrite (0x24, 1, Buffer.from([0x00]));
        await delay(1000);
      }
    } catch (e) {
      await delay(1000);
      console.log('Some Error',e);
      smb.close();
    }
  }
})();
