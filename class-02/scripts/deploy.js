const hre = require("hardhat");

async function main() {
    const Pizza = await hre.ethers.getContractFactory("Pizza");
    
    const pizza = await Pizza.deploy(12); // Argumento é a quantidade de pedaços da nossa pizza!

    await pizza.waitForDeployment() // await pizza.deployed()

    console.log("Pizza lançado no endereço:", await pizza.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
