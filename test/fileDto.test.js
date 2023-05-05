
const sinon = require("sinon");
const { expect } = require("chai");


const { Api } = require("../Services/api.services");
const { validatorStructure } = require("../Services/validation.services");
const { format } = require("../ApiServices/Folder/fileDto");

const { formatFilter } = require("../ApiServices/Folder/fileDto");



describe("fileDto", () => {
  describe("formatFilter", () => {
    let apiStub;

    beforeEach(() => {
      apiStub = sinon.stub(Api, "call");
    });

    afterEach(() => {
      apiStub.restore();
    });

    it("should return empty array when no file is found", async () => {
      const fileName = "nonexistent.txt";
      const data = { data: undefined };
      apiStub.withArgs(sinon.match({ params: fileName })).returns(data);

      const result = await formatFilter([], { fileName });
      expect(result).to.be.an("array").that.is.empty;
    });
  });
});

