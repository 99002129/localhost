class Vochxar {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.bomb = 8
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2]
        ]
    }

    chooseCell(char1, char2, char3, char4, char5) {
        this.getNewCoordinates()
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[x][y] == char1 || matrix[x][y] == char2 || matrix[x][y] == char3 || matrix[x][y] == char4 || matrix[x][y] == char5) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    boom() {
        let cells = this.chooseCell(1, 2, 3, 4, 5)
        let cell = rand(cells)
        if (cell) {
            let newX = cell[0]
            let newY = cell[1]
            matrix[newX][newY] = 0
            matrix[this.x][this.y] = 0
            for (var i = 0; i < vochxarArr.length; i++) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                }
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }

                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                }
                if (newX == PosionedGrassArr[i].x && newY == PosionedGrassArr[i].y) {
                    PosionedGrassArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
        }
    }
}
