const fs = require('fs')
const path = require('path')
const copyFile = require('./copyFile')

const createDir = (fileName, sourcePath, destinationPath) => {
  const localDestPath = path.join(destinationPath.toString(), fileName[0].toUpperCase())
  // console.log(localDestPath)
  if (!fs.existsSync(localDestPath)) {
    fs.mkdirSync(localDestPath)
  }
  let destinationBase = path.join(localDestPath, fileName)
  // console.log(destinationBase)
  copyFile(sourcePath, destinationBase)
}

module.exports = createDir