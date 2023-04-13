// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const MOC = await ethers.getContractFactory('Mollacoin');
    console.log('Deploying Contract...');
    const moc = await MOC.deploy();
    await moc.deployed();
    console.log('MOC deployed to:', moc.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    