let http = require("http")

let ourApp = http.createServer(function func(req,res){
    if(req.url == "/"){
        res.end("Welcome to our website!")
    }
    else if(req.url == "/about"){
        res.end("Nothing about us to know yet")
    }
    else if(req.url == "/help"){
        res.end("Help yourslef!")
    }
    else{
        res.end("Wrong URL")
    }
})

ourApp.listen(3000)

/*open terminal from menu bar
navigate to this file's directory
type "node test.js" and press enter

Open browser and goto localhost:3000*/
