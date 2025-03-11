
export function calculateAge(dateOfBirth) {
  const currentYear = new Date().getFullYear()
  return currentYear - dateOfBirth
}