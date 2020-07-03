
/********************************************
    [var vs let, const]
    var는 재선언이 가능하지만, let, const는 불가하다.
    var는  function level scope, let, const는 block level scope
    hoisting에 차이점이 있다. 
*********************************************/

/********************************************
    [== vs ===]
    ==은 Equality, ===은 Identity 연산자이다.
    ==은 비교 전에 형변환이 일어나지만, ===은 그렇지 않다.
*********************************************/


function sum(factors) {
    return factors.reduce(function(total, factor) { 
        return total + factor;
    }, 0);
}

Number.prototype.isFactor = function(potentialFactor) {
    return this.valueOf() % potentialFactor === 0; 
}

Number.prototype.isPerfect = function() {
    const currentFactor = this.factors();
    return (sum(currentFactor) - this.valueOf()) === this.valueOf();
}

Number.prototype.isAbundant = function() {
    const currentFactor = this.factors();
    return (sum(currentFactor) - this.valueOf()) > this.valueOf();
}

Number.prototype.isDeficient = function() {
    const currentFactor = this.factors();
    return (sum(currentFactor) - this.valueOf()) < this.valueOf(); 
}

Number.prototype.factors = function() {
    const factorSet = new Set();
    for (let pod = 1; pod <= Math.sqrt(this.valueOf()); pod++) {
        if (this.isFactor(pod)) {
            factorSet.add(pod);
            factorSet.add(this.valueOf() / pod);
        }
    }
    return Array.from(factorSet);
}

Number.prototype.isPrime = function () {
    function equalSet(aset, bset) {
        if (aset.length !== bset.length) return false;
        for (let a of aset) if (!bset.includes(a)) return false;
        return true;
    }
    const primeSet = [1, this.valueOf()];
    return this.valueOf() > 1 && equalSet(this.factors(), primeSet);
};


// 완전수(perfect), 과잉수(Abundant), 부족수(Deficient), 소수(Prime) 목록을 각각 출력

function whoAmI(num) {
    const status = [];
    if (num.isPerfect()) {
        status.push('perfect');
    } else if (num.isAbundant()) {
        status.push('abundant');
    } else if (num.isDeficient()) {
        status.push('deficient');
    }
    if (num.isPrime()) {
        status.push('prime');
    }
    return status;
}

function print(num) {
    const result = whoAmI(num);
    return `${num} : ${result.join(', ')}`;
}

for (let i = 2; i < 10; i++) {
    console.log(print(i));
}