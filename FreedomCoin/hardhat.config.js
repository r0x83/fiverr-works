/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 const { key, url } = require('./secrets.json');


module.exports = {
  solidity: "0.4.20",
  networks: {
           testnet: {
           url: url,
           accounts: [key],
        },
      },
};
