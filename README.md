# Introduction

Node.Js 7-zip wrapper usage examples for node-7z (https://github.com/quentinrossetti/node-7z).
Using binary installer for 7-zip (https://github.com/Alex-Kondakov/7zip-binaries)

# Use examples locally

```shell
# cd /your/projects/dir
# git clone https://github.com/Alex-Kondakov/7zip-examples.git
# cd 7zip-examples
# npm install
```

# Usage examples

## Extracting from RAR archive

```javascript
const binaries = require('7zip-binaries').bin()
const archive = require('node-7z')

const result = archive.extractFull('../assets/input/content.rar', '../assets/output', {$bin: binaries})

result.on('error', (err) => console.log(err))
result.on('end', () => console.log('done'))
```