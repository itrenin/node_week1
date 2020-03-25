const fs = require('fs')
const path = require('path')
const createDir = require('./createDir')

const readDir = (sourcePath, destPath) => {
  return new Promise((resolve, reject) => {
    try {
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
              readDir(localBase, destPath)
            } else {
              createDir(item, localBase, destPath)
            }
          })
        })
      })
      resolve(true)
    } catch (e) {
      reject(e)
    }
  })
}

module.exports = readDir
