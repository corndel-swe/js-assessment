/**
 * Checks if a person can ride the rollercoaster.
 *
 * A person can ride the rollercoaster if they are 12 years old or over
 * and strictly over 150 cm tall.
 *
 * @param {number} age - The age of the person.
 * @param {number} height - The height of the person in centimeters.
 * @returns {boolean} - true if the person can ride the rollercoaster, false
 *   otherwise.
 */
export function rollercoaster(age, height) {
  const canRide = age >= 12 && height > 150
  return canRide
}
