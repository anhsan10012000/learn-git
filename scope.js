createCounter()
function createCounter() {
  console.log('Funcction')
}
const counter1 = createCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
// const student = {
//     name: "Anh San",
//     age: 22,
//     school: "Cao đăng công nghê thủ đực"
// }
const student2 = ['Anh San', 22, 'CD Công nghe thu duc']
const [name,age, school ] = student2;
console.log(name,age, school)