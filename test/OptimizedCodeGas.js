const { expect } = require("chai");

describe("Lock", function () {

  async function deploy() {
    // Contracts are deployed using the first signer/account by default
    // const [owner, otherAccount] = await ethers.getSigners();

    const OptimizedCodeGas = await ethers.getContractFactory("OptimizedCodeGas");
    const optimizedCodeGas = await OptimizedCodeGas.deploy();

    return { optimizedCodeGas };
  }

  describe("Deployment", function () {
    it("Should compare with true/false value", async function () {
      const { optimizedCodeGas } = await deploy();
      const tx = await optimizedCodeGas.getBoolState()
      await tx.wait();
      expect(await optimizedCodeGas.value()).to.equal(1);
    });

    it("Should add value", async function () {
      const { optimizedCodeGas } = await deploy();
      const tx = await optimizedCodeGas.addToValue()
      await tx.wait();
    });

    it.only("Should check refund", async function () {
      const { optimizedCodeGas } = await deploy();
      const tx = await optimizedCodeGas.getRefundAmount()
      await tx.wait();
    });
  });

});
