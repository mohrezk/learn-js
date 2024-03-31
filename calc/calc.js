class Calculator {
    constructor() {
        this.total = 0
    }

    add(x) {
        this.total += x
    }

    subtract(x) {
        this.total -= x
    }

    multiply(x) {
        this.total *= x
    }

    divide(x) {
        this.total /= x
    }

    reset() {
        this.total = 0
    }
}

newObj = new Calculator()
newObj.add(10)
newObj.multiply(10)
console.log(newObj.total)
newObj.divide(2)
console.log(newObj.total)
newObj.subtract(10)
console.log(newObj.total)