const tvl = require('../src/index');

test('Converts truth values to ternary', () => {
    expect(tvl.convert(true)).toBe(1);
    expect(tvl.convert(undefined)).toBe(0);
    expect(tvl.convert(false)).toBe(-1);
    try { 
        tvl.revert(10);
    } catch(e) { 
        expect(e instanceof Error).toBe(true);
    }
});

test('Reverts ternary to truth values', () => {
    expect(tvl.revert(1)).toBe(true);
    expect(tvl.revert(0)).toBe(undefined);
    expect(tvl.revert(-1)).toBe(false);
    try { 
        tvl.revert(10);
    } catch(e) { 
        expect(e instanceof Error).toBe(true);
    }
});

test('Not operator', () => {
    expect(tvl.not(true)).toBe(false);
    expect(tvl.not(false)).toBe(true);
    expect(tvl.not(undefined)).toBe(undefined);
});

test('And operator', () => {
    expect(tvl.and(true,true)).toBe(true);
    expect(tvl.and(true,false)).toBe(false);
    expect(tvl.and(false,false)).toBe(false);
    expect(tvl.and(false,true)).toBe(false);
    expect(tvl.and(true,undefined)).toBe(undefined);
    expect(tvl.and(false,undefined)).toBe(false);
    expect(tvl.and(undefined,true)).toBe(undefined);
    expect(tvl.and(undefined,false)).toBe(false);
    expect(tvl.and(undefined,undefined)).toBe(undefined);
});

test('Or operator', () => {
    expect(tvl.or(true,true)).toBe(true);
    expect(tvl.or(true,false)).toBe(true);
    expect(tvl.or(false,false)).toBe(false);
    expect(tvl.or(false,true)).toBe(true);
    expect(tvl.or(true,undefined)).toBe(true);
    expect(tvl.or(false,undefined)).toBe(undefined);
    expect(tvl.or(undefined,true)).toBe(true);
    expect(tvl.or(undefined,false)).toBe(undefined);
    expect(tvl.or(undefined,undefined)).toBe(undefined);
});

test('Xor operator', () => {
    expect(tvl.xor(true,true)).toBe(false);
    expect(tvl.xor(true,false)).toBe(true);
    expect(tvl.xor(false,false)).toBe(false);
    expect(tvl.xor(false,true)).toBe(true);
    expect(tvl.xor(true,undefined)).toBe(undefined);
    expect(tvl.xor(false,undefined)).toBe(undefined);
    expect(tvl.xor(undefined,true)).toBe(undefined);
    expect(tvl.xor(undefined,false)).toBe(undefined);
    expect(tvl.xor(undefined,undefined)).toBe(undefined);
});

test('Implication operator', () => {
    expect(tvl.imp(true,true)).toBe(true);
    expect(tvl.imp(true,false)).toBe(false);
    expect(tvl.imp(false,false)).toBe(true);
    expect(tvl.imp(false,true)).toBe(true);
    expect(tvl.imp(true,undefined)).toBe(undefined);
    expect(tvl.imp(false,undefined)).toBe(true);
    expect(tvl.imp(undefined,true)).toBe(true);
    expect(tvl.imp(undefined,false)).toBe(undefined);
    expect(tvl.imp(undefined,undefined)).toBe(undefined);
});

test('Biconditional operator', () => {
    expect(tvl.bi(true,true)).toBe(true);
    expect(tvl.bi(true,false)).toBe(false);
    expect(tvl.bi(false,false)).toBe(true);
    expect(tvl.bi(false,true)).toBe(false);
    expect(tvl.bi(true,undefined)).toBe(undefined);
    expect(tvl.bi(false,undefined)).toBe(undefined);
    expect(tvl.bi(undefined,true)).toBe(undefined);
    expect(tvl.bi(undefined,false)).toBe(undefined);
    expect(tvl.bi(undefined,undefined)).toBe(undefined);
});