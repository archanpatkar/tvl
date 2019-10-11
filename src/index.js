const tvl = {};
tvl.convert = v => {
    if(v === true) return 1;
    else if(v === false) return -1;
    else if(v === undefined) return 0;
    throw new Error("Please pass a valid truth value");
};
tvl.revert = v => {
    if(v === 1) return true;
    else if(v === -1) return false;
    else if(v === 0) return undefined;
    throw new Error("Please pass a valid number");
};
const min = (a,b) => a > b ? b : a;
const max = (a,b) => a > b ? a : b;
tvl.not = x => tvl.revert(-tvl.convert(x));
tvl.and = (x,y) => tvl.revert(min(tvl.convert(x),tvl.convert(y)));
tvl.or = (x,y) => tvl.revert(max(tvl.convert(x),tvl.convert(y)));
tvl.xor = (x,y) => tvl.and(tvl.or(x,y),tvl.not(tvl.and(x,y)));
tvl.imp = (x,y) => tvl.or(tvl.not(x),y);
tvl.bi = (x,y) => tvl.and(tvl.imp(x,y),tvl.imp(y,x));
if(typeof(module) !== "undefined") module.exports = tvl; 