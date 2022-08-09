// function logger (frist, last){
//     console.log(frist,last)
// }
// logger('SAN', 'ANH')
// logger('ANH', 'AN')
// logger('PASS', 'PV')

function loggtext() {
    let counter = 0

        function increase() {
            return ++counter
        }
    return increase()
}
const demm = loggtext()
console.log(demm)