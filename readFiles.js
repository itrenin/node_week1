const fs = require('fs')
const path = require('path')
const createDir = require('./createDir')

const readDir = (sourcePath, destPath) => {
  // const files = fs.readdirSync(sourcePath)
  fs.readdir(sourcePath, (err, files) => {
    if (err) {
      console.error(err)
      return
    }
    files.forEach((item) => {
      let localBase = path.join(sourcePath, item)
      fs.stat(localBase, (err, stat) => {
        if (err) {
          console.error(err)
          return
        }
        if (stat.isDirectory()) {
          //console.log(' '.repeat(level) + 'DIR: ' + item)
          readDir(localBase, destPath)
        } else {
          //console.log(' '.repeat(level) + 'FILE: ' + item)
          //console.log(destPath, localBase)
          createDir(item, localBase, destPath)
        }
      })
    })
  })
  // console.log(sourcePath)
  // console.log(files)
}

module.exports = readDir
