export function validateAreaCode(code: string): boolean {
  return /^0?\d{1,2}$/.test(code.trim());
}
