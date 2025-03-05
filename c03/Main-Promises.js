const { writwContent, appendContent, readContent } = require("./LocalModule-Promises")
 async function writeAndReadContent(fileName, dataToWrite) {
    try {
        const message = await writeContent(fileName, dataToWrite)
        console.log(message)
        const data = await readContent(fileName)
        console.log(data)
    }catch (error) {
        console.error(error)
    }
 }

 async function appendAndReadContent(fileName, dataToAppend) {
    try {
        const message = await appendContent(fileName, dataToAppend)
        console.log(message)
        const data = await readContent(fileName)
        console.log(data)
    }catch (error) {
        console.error(error)
    }
 }

 appendAndReadContent("booksPromises.txt", "The Fault in Our Stars by John Green, ")