const chai = require('chai');
const { expect } = chai;
const { validatorStructure } = require('../Services/validation.services');


describe('validatorStructure', () => {
    it('devuelve un array con los objetos válidos', async () => {
        const data = `test3.csv,mzJGoo,5480451460,7d0136a4d5f5779027659a112dcea440`;

        const result = await validatorStructure({ data });

        expect(result).to.deep.equal([
            {
                "text": "mzJGoo",
                "number": "5480451460",
                "hex": "7d0136a4d5f5779027659a112dcea440"
            }
        ]);
    });

    it('devuelve un array vacío si no hay objetos válidos', async () => {
        const data = `file,text,number,hex\nexample.csv,hello world,42,notahexvalue\n`;

        const result = await validatorStructure({ data });

        expect(result).to.deep.equal([]);
    });
});