const fs = require('fs')
const path = require('path');

function readDirRecursively(dir) {
  const items = fs.readdirSync(path.resolve(dir))
  
  return items.map(item => {
    const pathToItem = path.resolve(dir, item)
    const isDir = fs.statSync(pathToItem).isDirectory()
    if (isDir) return readDirRecursively(pathToItem)
    return pathToItem
  }).flat()
}

const paths = readDirRecursively('./playground')
console.log(paths)
