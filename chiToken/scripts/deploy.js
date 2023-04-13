// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const ChiToken = await ethers.getContractFactory('ChiToken');
    console.log('Deploying Contract...');
    const CHI = await ChiToken.deploy();
    await CHI.deployed();
    console.log('Contract deployed to:', CHI.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    