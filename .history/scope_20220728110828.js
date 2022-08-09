function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }
    return increase
}