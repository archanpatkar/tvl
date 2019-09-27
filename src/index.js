const convert = v => {
    if(v === true) return 1;
    else if(v === false) return -1;
    else if(v === undefined) return 0;
    throw new Error("Please pass a valid truth value");
}

const revert = v => {
    if(v === 1) return true;
    else if(v === -1) return false;
    else if(v === 0) return undefined;
    throw new Error("Please pass a valid number");
}

const neg = a => -a;
const min = (a,b) => a > b ? b : b > a ? a : a;
const max = (a,b) => a > b ? a : b > a ? b : a;
const not = x => revert(neg(convert(x)));
const and = (x,y) => revert(min(convert(x),convert(y)));
const or = (x,y) => revert(max(convert(x),convert(y)));
const xor = (x,y) => and(or(x,y),not(and(x,y)));
const imp = (x,y) => or(not(x),y);
const bi = (x,y) => and(imp(x,y),imp(y,x));

const tvl = {
    not,
    and,
    or,
    xor,
    imp,
    bi,
    neg,
    min,
    max,
    convert,
    revert
};

if(typeof(window) === "undefined") module.exports = tvl;