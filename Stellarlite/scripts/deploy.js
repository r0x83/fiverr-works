// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Stellarelite = await ethers.getContractFactory('Stellarelite');
    console.log('Deploying Contract...');
    const STL = await Stellarelite.deploy();
    await STL.deployed();
    console.log('Contract deployed to:', STL.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    