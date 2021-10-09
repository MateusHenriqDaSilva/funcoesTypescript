// const adicionarDoisNumeros = (a: number, b: number): number => a + b
// console.log(adicionarDoisNumeros(3, 4))
var adicionarDoisNumeros = function (a) {
    return function (b) {
        return a + b;
    };
};
var addFuncao = adicionarDoisNumeros(3);
console.log(addFuncao(4));
