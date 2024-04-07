/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "SHM",
  networks: {
    hardhat: {},
    SHM: {
      url: "https://rpc.shmn.network",
      accounts: ['5be726c7d1e87c3974580539256a4b48bfe5430e99e2d96cc84683b1fd54da83'],
      gas: 210000000,
      gasPrice: 800000000000,
    }
  }
}