// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const FREE = await ethers.getContractFactory('FREE');
    console.log('Deploying Contract...');
    const free = await FREE.deploy();
    await free.deployed();
    console.log('FREE deployed to:', free.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    