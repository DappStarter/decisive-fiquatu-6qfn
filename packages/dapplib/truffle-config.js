require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain snake imitate prison fringe tuna'; 
let testAccounts = [
"0xdb0462c346abdb52379430c9cc712d5bfc25b25285cb7ecd4185340c3789aa9a",
"0xa6eb5736abfca56f67153302fa883ea6c40c581439c7188df795f42b64492805",
"0x93235b5f656d02e17cfabc23045557a4c61d5f29618be3acf8059bf656a3823c",
"0xe1fcfabb537ff1319db1a541c532aa77673d0e794bb69614d14b8ceca698293d",
"0x5e0e272bdd8faa5ebba946cebe095bfe0f315e2b9fbeff843e12e590f2b21d2e",
"0x18b758a92e3406cebe9cdc4de312946aa3fa463b2f8f63312f48ad8785cb3db1",
"0x447bdfc14601a1d15d4d0de07ea71eb9f0dbe7a1bf339ce9ccaa103517650720",
"0x5d3078bb2bcee34439cf7952be4ae00a046ff0319874fd7e1128ed99fd4b4651",
"0x62360de934fa03c6b39e1ba2a559fbfecc8263f23558ccdeaf88ba877b9a2230",
"0xf6d4979d1090fae1fbe31269303a62685d3eacf07c1f886386fce9826305f92f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


