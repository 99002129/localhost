class GrassEater {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 8
        this.directions = []
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y - 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1]
        ]
    }
    
    chooseCell(char1) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[x][y] == char1) {
                found.push(this.directions[i])
            }
        }
        return found
    }
    move() {
        let emptyCells = this.chooseCell(0)
        let emptyCell = rand(emptyCells)
        if (emptyCell && this.energy > 0) {
            this.energy--
            let newX = emptyCell[0]
            let newY = emptyCell[1]
            matrix[newX][newY] = 2
            matrix[this.x][this.y] = 0
            this.x = newX
            this.y = newY
        } else if (this.energy <= 0) {
            this.die()
        }
    }
    eat() {
        this.mul()
        let grassCells = this.chooseCell(1)
        let grassCell = rand(grassCells)
        let posionedGrassCells = this.chooseCell(4)
        let posionedGrassCell = rand(posionedGrassCells)
        if (grassCell && this.energy > 0) {
            this.energy++
            let newX = grassCell[0]
            let newY = grassCell[1]
            matrix[newX][newY] = 3
            matrix[this.x][this.y] = 0
            for (var i = 0; i < grassArr.length; i++) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
        } else if (posionedGrassCell && this.energy > 0) {
            this.energy++
            let newX = posionedGrassCell[0]
            let newY = posionedGrassCell[1]
            matrix[newX][newY] = 3
            matrix[this.x][this.y] = 0
            for (var i = 0; i < PosionedGrassArr.length; i++) {
                if (newX == PosionedGrassArr[i].x && newY == PosionedGrassArr[i].y) {
                    PosionedGrassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
        } else this.move()


    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let emptyCell = rand(emptyCells)
        if (this.energy >= 12 && emptyCell) {
            let newX = emptyCell[0]
            let newY = emptyCell[1]
            matrix[newX][newY] = 2
            let great = new GrassEater(newX, newY)
            grassEaterArr.push(great)
            this.energy -= 8
        }
    }
    die() {
        matrix[this.x][this.y] = 0
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1)
            }
        }
    }
}
