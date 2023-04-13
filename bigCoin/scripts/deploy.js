// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const BigCoin = await ethers.getContractFactory('BigCoin');
    console.log('Deploying Contract...');
    const BGC = await BigCoin.deploy();
    await BGC.deployed();
    console.log('Contract deployed to:', BGC.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    