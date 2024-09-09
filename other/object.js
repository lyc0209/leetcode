class Person {
    name = ""

    constructor(name = "") {
        this.name = name
    }
}

const p1 = new Person("qq")

console.log(Object.getPrototypeOf(p1))