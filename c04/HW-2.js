const http = require("http")
const { convertMilesToKm, convertCelsuisToFahrenheit, convertPoundsToKilogram, convertFeetTometres } = require("./conversion")
const { convertHectareToSquareMeter } = require("./conversion2")

http.createServer((req, res) => {
    const splitURL = req.url.split("/")
    const [emptyString, conversion, number] = splitURL
    switch (conversion) {
        case ("convertMilesToKm"):
            res.end('${convertMilesToKm(number)}');
            break;
        case ("convertCelsuisToFahrenheit"):
            res.end('${convertCelsuisToFahrenheit(number)}');
            break;
        case ("covertPoundsToKilogram"):
            res.end('${convertPoundsToKilogram(number)}');
            break;
        case ("convertFeetToMetres"):
            res.end('${convertFeetToMetres(number)}');
            break;
        case ("convertHectareToSquareMeter"):
            res.end('${convertHectareToSquareMeter(number)}');
            break;
        default:
            res.end('Invalid input!'):
    }
}).listen(8080, () => console.log("Server started"))