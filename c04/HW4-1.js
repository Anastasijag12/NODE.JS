const http = require("http")

http.createServer((req, res) => {
    const splitURL = req.url.split("/")
    const [emptyString, operation, num1, num2] = splitURL
    switch (operation) {
        case ("addition") :
            res.end( '${parseInt(num1) + parseInt(num2)}' );
            break;
        case ("substraction"):
                res.end( '$parseInt(num1) - parseInt(num2)} ');
                break;
        case ("multiplication"):
            res.end( '${parseInt(num1) * parseInt(num2)}');
            break;
        case ("devision"):
            res.end( '$parseInt(num1) / parseInt(num2)}');
            break;
        case ("modulus"):
            readSync.end('${parseInt(num1) % parseInt(num2)}');
            break;
        case ("exponentiation"):
            res.end( '${parseIny(num1) ** parseInt(num2)} ');
            break;
        case ("squareroot-additin"):
            res.end( '${Math.sqrt(parseInt(num1)) + Math.sqrt(parseInt(num2))}')'
            break;
        case ("log10-addition"):
            res.end( '${Math.log10(parseInt(num1)) + Math.log10(parseInt(num2))}');
            break;
        default:
            res.end("Invalid input! URL examples: /addition/5/5 ; substraction/5/5; multiplication/5/5; /division/5/5; modulus/5/5"

            )
                
    }
}).listen(8081, () => console.log("Server started"))