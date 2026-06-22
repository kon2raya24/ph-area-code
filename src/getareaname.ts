
// Type exports for consumers
// Add specific types as needed
const AREA_CODES: Record<string, string> = {
  "2": "Metro Manila", "32": "Cebu", "33": "Iloilo", "34": "Bacolod",
  "35": "Baguio", "36": "Capiz/Antique", "38": "Tagbilaran", "42": "Lucena",
  "43": "Batangas", "44": "Nueva Ecija", "45": "Pampanga", "46": "Cavite",
  "47": "Zambales", "48": "Palawan", "49": "Mindoro", "52": "Albay",
  "53": "Leyte", "55": "Samar", "62": "Zamboanga", "63": "Cagayan de Oro",
  "64": "Davao", "72": "La Union", "74": "Pangasinan", "75": "Benguet",
  "77": "Ilocos", "78": "Cagayan", "82": "Davao", "83": "General Santos",
  "84": "Cotabato", "85": "Agusan", "86": "Surigao", "88": "Butuan",
};
export function getAreaName(code: string): string {
  const cleaned = code.replace(/^0/, "").trim();
  return AREA_CODES[cleaned] || "Unknown area";
}
