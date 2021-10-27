
// Simple example of temporary file creation

function createTempFile({
  name = `tmpFile${new Date().getTime()}`,
  extension = 'txt',
  buffer
  }) {
  const tempFolderPath = `${__dirname}/tempFiles`
  const tempFilePath = `${tempFolderPath}/${name}.${extension}`

  if (!fs.existsSync(tempFolderPath)) {
    fs.mkdirSync(tempFolderPath)
  }

  fs.writeFileSync(tempFilePath, buffer)

  return {
    tempFilePath,
    deleteTempFile: () => fs.unlinkSync(tempFilePath)
  }
}