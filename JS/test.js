let http = require("http")

let ourApp = http.createServer(function func(req,res){
    if(req.url == "/"){
        res.end("Welcome to our website!")
    }
    else if(req.url == "/about"){
        res.end("Nothing about us to know yet")
    }
    else{
        res.end("Wrong URL")
    }
})

ourApp.listen(3000)

