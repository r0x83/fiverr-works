/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url,etherscanApiKey } = require('./secrets.json');


module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: {
        yul: true,
        yulDetails: {
          stackAllocation: true,
          optimizerSteps: "dhfoDgvulfnTUtnIf"
        }
      }
    }
  },
  networks: {
           mainnet: {
           url: url,
           accounts: [key],
        },
      },
  etherscan: {
          //etherscan api key
          apiKey: {
            "bsc":"GFWVK1H6FQFKWG9788GJ3FESGQ3E543AFU"
          }
      }    
};