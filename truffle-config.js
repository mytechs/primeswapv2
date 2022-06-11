require('babel-register');
require('babel-polyfill');
require('dotenv').config();
//const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const privateKeys = process.env.PRIVATE_KEYS || ""


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          ["58a25ab0754da76df42b27df6aead81e9f0b0839f1772d3e637a5eaace00ef49"], // Array of account private keys
          `https://rinkeby.infura.io/v3/7d7e6da61e0b40f79b04069b7a689845`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    },
    matic: {
      provider: () => new HDWalletProvider(["58a25ab0754da76df42b27df6aead81e9f0b0839f1772d3e637a5eaace00ef49"], `https://matic-mumbai.chainstacklabs.com`),
      network_id: 80001,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
    },
    polygon: {
      provider: function() {
        return new HDWalletProvider(
          ["773efa5979f33eb5e3dee5f049d16541396ef1c344c703033dbff01547274226"], // Array of account private keys
          ` https://matic-mumbai.chainstacklabs.com`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 80001,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}