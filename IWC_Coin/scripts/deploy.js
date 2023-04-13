// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const IWC = await ethers.getContractFactory('IncredibleWealthCoin');
    console.log('Deploying Contract...');
    const iwc = await IWC.deploy();
    await iwc.deployed();
    console.log('MOC deployed to:', iwc.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    