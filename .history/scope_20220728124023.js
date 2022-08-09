function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }
    return increase
}
const counter1 = createCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
const student = {
    name: "Anh San",
    age: 22,
    school: "Cao đăng công nghê thủ đực"
}
const {name,age, } = student;
console.log(name,age)