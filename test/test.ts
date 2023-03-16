import { expect } from "chai";
import { ethers } from "hardhat";

describe("IBWallet", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("IBWallet");

    const instance = await ContractFactory.deploy();
    await instance.deployed();

    expect(await instance.name()).to.equal("IB Wallet");
  });
});
