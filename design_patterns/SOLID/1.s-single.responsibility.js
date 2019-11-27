
// Every class should have only 1 responsibility
// also "single responsibility" called "separation of concerns"

const fs = require('fs');

class DocumentsStorage {
  documentsQuantity = null
  documents = null

  constructor() {
    this.documentsQuantity = 0
    this.documents = {}
  }

  addDocument(text) {
    this.documentsQuantity++
    this.documents[this.documentsQuantity] = text
  }

  toString() {
    return Object.entries(this.documents).join('\n')
  }

  // These are methods with another responsibility - make separate class with them
  // saveDocumentsToFile() {}

  // loadDocumentsFromUrl() {}
}

class DocumentsManager {
  constructor(){}

  saveDocumentsToFile(documentContent, filePath) {
    fs.writeFileSync(filePath, documentContent)
  }

  loadDocumentsFromUrl() {
    // ...
  }
}

const documentsStorage = new DocumentsStorage()
const documentsManager = new DocumentsManager()

documentsStorage.addDocument('first doc as text')
documentsStorage.addDocument('second doc as text')
documentsStorage.addDocument('third doc as text')

const currentDocStorage = documentsStorage.toString()

documentsManager.saveDocumentsToFile(currentDocStorage, `${__dirname}/s-single.responsibility.txt`)
