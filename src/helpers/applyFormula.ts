import { HyperFormula } from 'hyperformula'

export default function applyFormula(value: number, formula: string,) {
  const options = {
    licenseKey: 'gpl-v3'
  }

  // Not a function -> use factor
  if (/^\d+$/.test(formula)) return Number(formula) * value

  formula = "=" + formula

  const hfInstance = HyperFormula.buildFromArray([[Number(value), formula]], options)

  const result = hfInstance.getCellValue({ col: 1, row: 0, sheet: 0 })

  if (typeof result === 'number' || typeof result === 'string') {
    return result
  }

  // Formula error
  if (typeof result === 'object' && result?.message) return result.message

  return 0
}