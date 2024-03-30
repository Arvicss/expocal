import type { expressions, solution } from '../types';

export const getExponentiation = (base: number, exponent: number) : solution => {
  let multiplicationCount = 0;
  const expressions : expressions[] = [];

  const power = (base: number, exponent: number) : number => {
    if (exponent === 0) {
      expressions.push({
        expression: `${base}^${exponent} = 1`,
        formulaUsed: `if n is 0: x^0 = 1`
      });
      return 1;
    } 
    
    if (exponent === 1) {
      expressions.push({
        expression: `${base}^${exponent} = ${base}`,
        formulaUsed: `if n is 1: x^1 = x`
      });
      return base;
    }
    
    if (exponent % 2 === 0) {
      expressions.push({
        expression: `${base}^${exponent} = ${base}^${exponent / 2} * ${base}^${exponent / 2}`,
        formulaUsed: `if n is even: x^n = x^(n / 2) * x^(n / 2)`
      });
      multiplicationCount += 1;
      const result = power(base, exponent / 2);
      return result * result;
    } 
    
    expressions.push({
      expression: `${base}^${exponent} = ${base} * ${base}^${(exponent - 1) / 2} * ${base}^${(exponent - 1) / 2}`,
      formulaUsed: `if n is odd:  x^n = x * x^(n - 1 / 2) * x^(n - 1 / 2)`
    });
    
    multiplicationCount += 2;
    const result = power(base, (exponent - 1) / 2);
    return base * result * result;
  }

  const result = {
    equation: `${base}^${exponent}`,
    result: power(base, exponent), 
    expressions,
    multiplicationCount
  }
  

  return result;
}