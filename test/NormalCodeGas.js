const { expect } = require("chai");

describe("Lock", function () {

  async function deploy() {
    // Contracts are deployed using the first signer/account by default
    // const [owner, otherAccount] = await ethers.getSigners();

    const NormalCodeGas = await ethers.getContractFactory("NormalCodeGas");
    const normalCodeGas = await NormalCodeGas.deploy();

    return { normalCodeGas };
  }

  describe("Deployment", function () {
    it("Should compare with true/false value", async function () {
      const { normalCodeGas } = await deploy();
      const tx = await normalCodeGas.getBoolState()
      await tx.wait();
      expect(await normalCodeGas.value()).to.equal(1);
    });

    it("Should compare with true/false value", async function () {
      const { normalCodeGas } = await deploy();
      const tx = await normalCodeGas.addToValue()
      await tx.wait();
    });

    it.only("Should check refund", async function () {
      const { normalCodeGas } = await deploy();
      const tx = await normalCodeGas.getRefundAmount()
      await tx.wait();
    });
  });

});
