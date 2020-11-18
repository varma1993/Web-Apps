let express = require("express")
let ourApp = express()

//the below line helps express to use the input field IDs (mentioned in IF for comparision)
ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res){
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit</button>
        </input>
    </form>`)
})

ourApp.post('/answer', function(req, res){
    if(req.body.skyColor == "Blue")
    {
        res.send("you're right")
    }
    else{
        res.send("you're wrong")
    }
})

ourApp.get('/answer', function(req, res){
    res.send("you're lost. Go home")
})

ourApp.listen(3000)
