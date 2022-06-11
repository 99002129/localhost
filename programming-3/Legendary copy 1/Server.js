var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


//Matrix generator

let matrix = []

function matrixGen(n, gr, grEat, predator, posion) {
    for (let x = 0; x < n; x++) {
        matrix[x] = []
        for (let y = 0; y < n; y++) {
            matrix[x][y] = 0
        }
    }
    
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * n)
        let y = Math.floor(Math.random() * n)
        
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1
        } else {
            i--
        }
    }
    
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * n)
        let y = Math.floor(Math.random() * n)
        
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2
        } else {
            i--
        }
    }
    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * n)
        let y = Math.floor(Math.random() * n)
        
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3
        } else {
            i--
        }
        
    }
    for (let i = 0; i < posion; i++) {
        let x = Math.floor(Math.random() * n)
        let y = Math.floor(Math.random() * n)
        
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4
        } else {
            i--
        }
    }
    
    return n
}
var n
matrixGen(20, 10, 30, 3, 2)



io.sockets.emit('send matrix', matrix)



let grassArr = []
let grassEaterArr = []
let predatorArr = []
let PoisonedGrassArr = []
let vochxarArr = []

LivingCreature = require("./Classes/LivingCreature")
Grass = require("./Classes/Grass")
GrassEater = require("./Classes/GrassEater")
Mard = require("./Classes/Mard")
PoisonedGrass = require("./Classes/PoisonedGrass")
Predator = require("./Classes/Predator")
Vochxar = require("./Classes/Vochxar")


function CreateObject(params) {
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[x][y] == 2) {
                let great = new GrassEater(x, y)
                grassEaterArr.push(great)
            }
            else if (matrix[x][y] == 3) {
                let small = new Predator(x, y)
                predatorArr.push(small)
            }
            else if (matrix[x][y] == 4) {
                let toxic = new PosionedGrass(x, y)
                PosionedGrassArr.push(toxic)
            }
            else if (matrix[x][y] == 5) {
                let bomba = new Vochxar(x, y)
                vochxarArr.push(bomba)
            }
        }
    }
}









