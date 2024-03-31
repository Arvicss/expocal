export type expressions = {
  expression : string,
  formulaUsed : string,
}

export type solution = {
  answer: string,
  equation: string,
  result: number
  expressions: expressions[],
  multiplicationCount: number,
}