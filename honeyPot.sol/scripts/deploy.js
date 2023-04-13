// scripts/deploy.js

async function main () {

    // We get the contract to deploy
    const EverCash = await ethers.getContractFactory('EverCash');
    console.log('Deploying Contract...');
    const CASH = await EverCash.deploy();
    await CASH.deployed();
    console.log('HoneyPot deployed to:', CASH.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
