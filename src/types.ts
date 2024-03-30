export type expressions = {
  expression : string,
  formulaUsed : string,
}

export type solution = {
  equation: string,
  result: number
  expressions: expressions[],
  multiplicationCount: number,
}