
// Type exports for consumers
// Add specific types as needed
/**
 * validateAreaCode
 * @param code
 */
export function validateAreaCode(code: string): boolean {
  return /^0?\d{1,2}$/.test(code.trim());
}
