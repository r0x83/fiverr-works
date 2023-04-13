/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url,etherscanApiKey } = require('./secrets.json');


module.exports = {
  solidity: "0.8.2",
  networks: {
           testnet: {
           url: url,
           accounts: [key],
        },
      },
  etherscan: {
          //etherscan api key
          apiKey: {
            "bscTestnet":"8EW6RBXAACA99N193MJA4ECCK6CZ8TDIRH"
          }
      }    
};