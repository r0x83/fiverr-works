// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const EGG = await ethers.getContractFactory('EasterEgg');
    console.log('Deploying Contract...');
    const egg = await EGG.deploy();
    await egg.deployed();
    console.log('Box deployed to:', egg.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
 
    