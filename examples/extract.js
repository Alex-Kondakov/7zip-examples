//Extracting from archive

const binaries = require('7zip-binaries').bin()
const archive = require('node-7z')

const result = archive.extractFull('../assets/input/content.rar', '../assets/output', {$bin: binaries})

result.on('error', (err) => console.log(err))
result.on('end', () => console.log('done'))