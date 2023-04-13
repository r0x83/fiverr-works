// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Swap = await ethers.getContractFactory('Swapsq');
    console.log('Deploying Contract...');
    const swap = await Swap.deploy();
    await swap.deployed();
    console.log('Box deployed to:', swap.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    