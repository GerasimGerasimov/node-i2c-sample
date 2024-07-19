import fs = require ("fs/promises");
import { delay } from "./utils/delay";

(async () => { 
  while (true) {
    try {
      const i2c = await fs.open ('/dev/i2c-1', 'r+');
      while (true) {
        //await fs.writeFile('/dev/i2c-1',new Uint8Array([0x20, 0x55]));
        await i2c.writeFile(new Uint8Array([0x20, 0x55]));
        await delay(1000);
        await i2c.writeFile(new Uint8Array([0x20, 0xAA]));
        await delay(1000);
      }
    } catch (e) {
      await delay(1000);
      console.log('Some Error',e);
    }
  }
})();
