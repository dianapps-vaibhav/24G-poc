const bip39 = require('bip39')
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')
var Web3 = require('web3');

(async () => {
  // const mnemonic = bip39.generateMnemonic(); //generates string
  const mnemonic = "enhance guard wish myth clip truly swim tired arrive crunch moral risk"
  console.log("Mnemonic:",mnemonic);

  const seed = await bip39.mnemonicToSeed(mnemonic); //creates seed buffer
  console.log("Seed:",seed);

  const root = hdkey.fromMasterSeed(seed)

  const masterPrivateKey = root.privateKey.toString('hex');
  console.log("Master private Key:",masterPrivateKey);

  const masterPubKey = root.publicKey.toString('hex');
  console.log("Master Public Key: ",masterPubKey);

  var path = "m/44'/60'/0'/0/0";

  const addrNode = root.derive(path)
  console.log("path: ", path);

  const pubKey = ethUtil.privateToPublic(addrNode._privateKey)
  console.log("Pubkey as hex:",pubKey.toString('hex'));

  const addr = ethUtil.publicToAddress(pubKey).toString('hex');
  console.log("pubkey to Addr:",addr);

  const address = ethUtil.toChecksumAddress(addr)
  console.log("Address with Check sum:",address);


  // transaction builder
  // const PrivBuffKey = Buffer.from(masterPrivateKey, 'hex')
  // const params = {
  //   nonce:0x6,
  //   to: '0x4584159875418ef77D1142bEec0b6648BD8eDb2f',
  //   value: '0x00',
  //   gasPrice: 0x09184e72a000,
  //   gasLimit: 0x30000,
  //   chainId: 3
  // }

  // const tx = new ethTx(params);
  // tx.sign(addrNode._privateKey); // Signing the transaction
  // const serializedTx = tx.serialize()
  // console.log('Serialized transaction:',serializedTx.toString('hex'));

  // console.log('\n');
})().catch(err => {
  console.error(err);
});