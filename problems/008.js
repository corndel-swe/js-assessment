/**
 * Returns 'fizz' if the number is divisible by 3,
 * 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
 *
 * Returns an empty string for all other numbers.
 *
 * @param {number} num The number to be checked.
 * @returns {string} 'fizz', 'buzz', 'fizzbuzz' or ''
 */
export function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  }

  if (num % 3 === 0) {
    return 'fizz'
  }

  if (num % 5 === 0) {
    return 'buzz'
  }

  return ''
}
