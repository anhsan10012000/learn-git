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
const student2 = ['Anh San', 22, 'CD Công nghe thu duc']
const {name,age, } = student2;
console.log(name,age)