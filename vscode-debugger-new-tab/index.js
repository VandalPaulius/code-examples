const secondFn = require('./second-fn')

const firstFn = () => {
    console.log('firstFn');

    secondFn()
}

firstFn();
