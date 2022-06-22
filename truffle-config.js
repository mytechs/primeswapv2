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
      provider: () => new HDWalletProvider(["a8cd4e0060a9c51ec8dae9fdacd4df0e6c3d5295afd85a1df37fc7530b57a9db"], `https://rpc-mumbai.maticvigil.com/v1/b17e511c6d036cabf0d0251ac7630511b72a2f14`),
      network_id: 80001,
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200,
    },
    polygon: {
      provider: function() {
        return new HDWalletProvider(
          ["a8cd4e0060a9c51ec8dae9fdacd4df0e6c3d5295afd85a1df37fc7530b57a9db"], // Array of account private keys
          ` https://rpc-mumbai.maticvigil.com/v1/b17e511c6d036cabf0d0251ac7630511b72a2f14`// Url to an Ethereum Node
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