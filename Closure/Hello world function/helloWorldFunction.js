/**
 * @return {Function}
 */
var createHelloWorld = function() {
    var printValue = "Hello World";
    return function(...args) {
        return printValue;
    }
};
