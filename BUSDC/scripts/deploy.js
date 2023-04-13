// scripts/deploy.js

async function main () {

    // We get the contract to deploy
    const BUSDC = await ethers.getContractFactory('Play2Burn');
    console.log('Deploying Contract...');
    const busdc = await BUSDC.deploy();
    await busdc.deployed();
    console.log('BUSDC deployed to:', busdc.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
