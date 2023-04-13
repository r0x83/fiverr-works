/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url,etherscanApiKey } = require('./secrets.json');


module.exports = {
  solidity: "0.6.12",
  // settings: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 2000,
  //     details: {
  //       yul: true,
  //       yulDetails: {
  //         stackAllocation: true,
  //         optimizerSteps: "dhfoDgvulfnTUtnIf"
  //       }
  //     }
  //   }
  // },
  networks: {
           mainnet: {
           url: url,
           accounts: [key],
           gas: 21000,
           gasPrice: 8000000000
        },
      },
  etherscan: {
          //etherscan api key
          apiKey: {
            "bsc":"GFWVK1H6FQFKWG9788GJ3FESGQ3E543AFU"
          }
      }    
};