require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift recipe saddle artwork hidden drive fringe speak'; 
let testAccounts = [
"0xfc762b32753f6057e473d13f9053e743aa1df63a399b13635bab883152d487b8",
"0xbc353537123bebdb383da503dadfa43f453ef2580c8b0acbddae97a5a99d757f",
"0xa9992a35a75de6e5e3d25948d37f77b4b7692106a00ef00178864d0d0aceddd6",
"0x99c2da8457b0fe2f5be622f5c5db4e154565f8e74061739a9465953cfcd987e9",
"0xfe8750d01ba44f2bea32f50c9759c238ffe384e024e3c0c5606c9a617ada2739",
"0x345e760e21dc95b6da19a1509fb1d48306c67dd952d0d38c82e3122ee3b8a41d",
"0xecaa902a13c48665db1aeb232acb95e1c9e3740741c773dc7051b165ca662be2",
"0xa2fb5568a51559361b53c263a3f6441bc53d9829c3d3bafb25e76b8cefcd91b8",
"0xd042e949d45f91d2de4d22fc1af34039cf1f1dd1eda24b4aec0ccaa5dff86473",
"0xb62a28fea47eac828611e1cdfbba8706a18dddb5e0e699c49c9955927b1bcd74"
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


