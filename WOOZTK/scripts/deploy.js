// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Wooz = await ethers.getContractFactory('WoozChain');
    console.log('Deploying Contract...');
    const wooz = await Wooz.deploy();
    await wooz.deployed();
    console.log('WOOZTK deployed to:', wooz.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    