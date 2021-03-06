const fs = require('fs')
const path = require('path')
const copyFile = require('./copyFile')

const createDir = (fileName, sourcePath, destinationPath) => {
  const localDestPath = path.join(
    destinationPath.toString(),
    fileName[0].toUpperCase()
  )
  // console.log(localDestPath)
  if (!fs.existsSync(destinationPath)) {
    fs.mkdir(destinationPath, (err) => {
      if (err) throw err
    })
  }
  if (!fs.existsSync(localDestPath)) {
    fs.mkdir(localDestPath, (err) => {
      if (err) throw err
    })
  }
  let destinationBase = path.join(localDestPath, fileName)
  // console.log(destinationBase)
  copyFile(sourcePath, destinationBase)
}

module.exports = createDir
