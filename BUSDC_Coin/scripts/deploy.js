// scripts/deploy.js
async function main () {

  // const contractFactory = await this.env.ethers.getContractFactory("BUSDC", {
  //   libraries: {
  //     IterableMapping: "0xaAA2099812076b2C7EE074bbE3D9Ea58c1c8EB93",
  //   },
  // });

    // We get the contract to deploy
    const BUSDC = await ethers.getContractFactory('BUSDC');
    console.log('Deploying Contract...');
    const busdc = await BUSDC.deploy();
    await busdc.deployed();
    console.log('BUSDC deployed to:', busdc.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

    