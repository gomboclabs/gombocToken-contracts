import { expect } from "chai";
import { ethers } from "hardhat";

describe("GombocToken", function () {
  it("Should be deployed on new address", async function () {
    const GombocToken = await ethers.getContractFactory("GombocToken");
    const Goot = await GombocToken.deploy();
    await Goot.deployed();

  });

  it("Should be minted new GombocToken", async function () {
    const GombocToken = await ethers.getContractFactory("GombocToken");
    const Goot = await GombocToken.deploy();
    await Goot.deployed();

  });

  it("Should be burned GombocToken", async function () {
    const GombocToken = await ethers.getContractFactory("GombocToken");
    const Goot = await GombocToken.deploy();
    await Goot.deployed();

  });
});

describe("GombocNFT", function () {
  it("Should be deployed on new address", async function () {
    const GombocNFT = await ethers.getContractFactory("GombocNFT");
    const GooNFT = await GombocNFT.deploy();
    await GooNFT.deployed();

  });

  it("Should be minted new GombocNFT", async function () {
    const GombocNFT = await ethers.getContractFactory("GombocNFT");
    const GooNFT = await GombocNFT.deploy();
    await GooNFT.deployed();

  });

  it("Should be burned GombocNFT", async function () {
    const GombocNFT = await ethers.getContractFactory("GombocNFT");
    const GooNFT = await GombocNFT.deploy();
    await GooNFT.deployed();

  });
});

