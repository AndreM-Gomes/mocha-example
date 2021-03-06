function fibonacci(n){
    if(n===1){
        return 1;
    }
    if(n===2){
        return 1;
    }
    return fibonacci( n - 1 ) + fibonacci(n - 2);
}

//Sequência de fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34
//MOCHA

var assert = require('assert')

describe('Fibonnaci', function(){
    it('Retornar valores conforme manda a sequência (considerando primeiro elemento como 1)', function(){
        const sequenciaFibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        //Acesso a posição da sequência e comparo com o valor gerado. Subtraio 1 porque o índice do array é baseado em zero
        assert.equal(fibonacci(4),sequenciaFibonacci[4 - 1])
    })
});