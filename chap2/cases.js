//Exercise 2.1 : Number of Cases Calculating Module
function factorial(n) {
    let result=1;
    for(let i=1;i<=n;i++){
        result=result*i;
    };
    return result;
}

const permutation = (n,r) => { //const permutation = (n,r) => fac(n) / fac(n-r)
    const a=factorial(n);
    const b=factorial(n-r);
    return a/b;
};

const combination = (n,r) => {
    const a=factorial(n);
    const b=factorial(n-r);
    const c=factorial(r);
    return a/(b*c);
};

const multiPermutation = (n,r) => {
    return n**r;
};

const multiCombination = (n,r) => {
    return combination(n+r-1,r);
};

module.exports={
    permutation,
    combination,
    multiPermutation,
    multiCombination,
};