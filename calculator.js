const express = require("express");
const localPort = 3000;
const app = express();

app.use(express.static("public")); //alows for css and images to work

const bodyParser = require("body-parser"); //alows us to receive post requests
app.use(bodyParser.urlencoded({extended: true})) //this need for body parser

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); //__dirname gets the local directory path
})

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var answer = num1 + num2;
    res.send("The result is " + answer);
})

app.listen(process.env.PORT || localPort, function () {
    console.log("Server Started on port ");
});
