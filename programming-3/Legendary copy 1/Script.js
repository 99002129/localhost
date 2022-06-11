var socket = io()       //LET VAR SOCKET



function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}



let side = 25
function setup() {

    createCanvas(matrix[0].length * side, matrix.length * side)
    frameRate(60)

    background("#2e4057")
    const mard = new Mard(0, 0)

   
    setInterval(() => {
        let x = Math.floor(Math.random() * n)
        let y = Math.floor(Math.random() * n)
        new Vochxar(x, y)
    }, 300);
}


function paint() {
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] == 0) {
                fill("#acacac")
            }
            else if (matrix[x][y] == 1) {
                fill("green")
            }
            else if (matrix[x][y] == 2) {
                fill("yellow")
            }
            else if (matrix[x][y] == 3) {
                fill("red")
            }
            else if (matrix[x][y] == 4) {
                fill("brown")
            }
            else if (matrix[x][y] == 5) {
                fill("black")
            }
            else if (matrix[x][y] == 9) {
                fill("black")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in PosionedGrassArr) {
        PosionedGrassArr[i].mul()
    }
    for (let i in PosionedGrassArr) {
        PosionedGrassArr[i].posion()
    }
    for (let i in vochxarArr) {
        vochxarArr[i].bomb()
    }
    for (let i in predatorArr) {
        predatorArr[i].die()
    }
}

setInterval(() => {
    socket.on("send matrix", paint)
}, 10);

//GOOD

