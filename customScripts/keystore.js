const fs = require("fs");
const util = require("util");
const { createStore } = require('key-store');
const path = require("path");
const crypto = require('crypto');

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

async function createFileStore() {
    const filePath = path.join(__dirname, "data.json")

    const saveKeys = data => writeFile(filePath, JSON.stringify(data), 'utf8')
    const readKeys = async () => JSON.parse(await readFile(filePath, 'utf8'))

    const store = createStore(saveKeys, await readKeys());
    console.log('store :', store);
    const hex = crypto.createHash('sha256').update("Phrase").digest('hex');

    await store.saveKey('data', hex, { privateKey: 'super secret private key' });

    const { privateKey } = store.getPrivateKeyData('data', hex)
    console.log('privateKey :', privateKey);
}

createFileStore();
