/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url,etherscanApiKey } = require('./secrets.json');


module.exports = {
  solidity: "0.6.12",
  networks: {
           mainnet: {
           url: url,
           accounts: [key],
        },
      },
      etherscan: {
        //your api key for bscscan or etherscan
         apiKey: etherscanApiKey
      }
};
