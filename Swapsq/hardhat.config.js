/**
 * @type import('hardhat/config').HardhatUserConfig
 * 
 */
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-etherscan");

 const { key, url } = require('./secrets.json');


module.exports = {
  solidity: "0.7.6",
  networks: {
           testnet: {
           url: url,
           accounts: [key],
        },
      },
      etherscan: {
        apiKey: "EMRSK9HYN1AB5F6PJSV3QHKM3TQ58C4TWN"
      },
};
