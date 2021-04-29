const celeste = document.getElementById('celeste')
const violeta = document.getElementById('celeste')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

const btnStart = document.getElementById('btnStart')

class Game {
    constructor() {
        this.initialize()
        this.getSecuencie()
        this.nextLevel()
    }

    initialize() {
        btnStart.classList.add('hide')
        this.level = 1
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde

        }
    }
    getSecuencie(){
        this.secuencie = new Array(10).fill(0).map(n => Math.floor(Math.random * 4))
    }

    nextLevel() {
        this.lightSecuencie()
    }

    tramsformNumberToColor (number) {
        switch (number) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    
    lightSecuencie() {
        for (let i = 0; i < this.level; i++){
            const color = this.tramsformNumberToColor(this.secuencie[i])
            setTimeout(() => this.lightColor(color), 1000 * i)
        }
    }

    lightColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOffColor(color), 350)
    }

    turnOffColor(color){
        this.colors[color].classList.remove('light')
    }


}

function startGame() {
    var game = new Game()
}