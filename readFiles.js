const fs = require('fs')
const path = require('path')
const createDir = require('./createDir')

const readDir = (sourcePath, destPath) => {
  const files = fs.readdirSync(sourcePath)

  files.forEach((item) => {
    let localBase = path.join(sourcePath, item)
    let state = fs.statSync(localBase)
    if (state.isDirectory()) {
      //console.log(' '.repeat(level) + 'DIR: ' + item)
      readDir(localBase, destPath)
    } else {
      //console.log(' '.repeat(level) + 'FILE: ' + item)
      //console.log(destPath, localBase)
      createDir(item, localBase, destPath)
    }
  })
}

module.exports = readDir
