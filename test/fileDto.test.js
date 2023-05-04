
const sinon = require("sinon");
const { expect } = require("chai");


const { Api } = require("../Services/api.services");
const { validatorStructure } = require("../Services/validation.services");
const { format } = require("../ApiServices/Folder/fileDto");




describe("Pruebas de la función format", () => {
    it("Debería retornar un array vacío si no se recibe ningún archivo", async () => {
      const data = {
        files: [],
      };
      const result = await format(data);
      expect(result).to.deep.equal([]);
    });
  
    it("Debería retornar un array de objetos al recibir una estructura de datos válida", async () => {
      const data = {
        files: ["test3.csv"],
      };
      const result = await format(data);
      expect(result).to.deep.equal([
        {
          file: "test3.csv",
          lineas: [
            {
              text: "mzJGoo",
              number: "5480451460",
              hex: "7d0136a4d5f5779027659a112dcea440",
            },
          ],
        },
      ]);
    });
  });