import { ethers } from "hardhat";

async function main() {
  const GombocToken = await ethers.getContractFactory("GombocToken");
  const gombocToken = await GombocToken.deploy();
  await gombocToken.deployed();
  console.log("GombocToken deployed to:", gombocToken.address);

  const GombocNFT = await ethers.getContractFactory("GambocNFT");
  const gombocNFT = await GombocNFT.deploy();
  await gombocNFT.deployed();

  console.log("GombocNFT deployed to:", gombocNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
