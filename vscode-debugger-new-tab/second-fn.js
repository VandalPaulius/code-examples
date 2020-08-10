module.exports = (...args) => {
    console.log('secondFn')

    if (args && args.length > 1) {
        console.log('got more than 1 args!')
    }
}