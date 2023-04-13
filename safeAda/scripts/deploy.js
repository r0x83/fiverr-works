// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const SafeADA = await ethers.getContractFactory('SafeADA');
    console.log('Deploying Contract...');
    const SFA = await SafeADA.deploy();
    await SFA.deployed();
    console.log('Contract deployed to:', SFA.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    