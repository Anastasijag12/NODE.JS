const http = require("http")
const { convertMilesToKm, convertCelsuisToFaahrenheit, convertPoundsToKilogram, convertFeetTometres} = require("./conversion")
const { convertHectareToSquareMeter } = require("./conversion2")

http.createServer((req, res) => {
    if (req.method === "POST") {
        let data = ""
        req.on("data", (chunk) => data += chunk)
        req.on("end", () => {
            const JSObject = JSON.parse(data)
            switch (req.url) {
                
            }
        })
    }
})