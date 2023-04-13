/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url,etherscanApiKey } = require('./secrets.json');


module.exports = {
  solidity: "0.8.7",
  networks: {
           mainnet: {
           url: url,
           accounts: [key],
        },
      },
  etherscan: {
          //etherscan api key
          apiKey: {
            "polygon":"PY38YE733XD7P8Z4ZV5HZUF55HBFA1ZXR2"
          }
      }    
};