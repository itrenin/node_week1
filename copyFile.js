const fs = require('fs')

const copyFile = (sourcePath, destinationPath) => {
    console.log(`copyng from ${sourcePath} to ${destinationPath}`)
    
    fs.link(sourcePath, destinationPath, err => {
        if (err){
            console.error(err)
            return
        }
    })

}

module.exports = copyFile