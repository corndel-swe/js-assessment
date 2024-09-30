/**
 * Calls the functions in the correct order to log the messages:
 * 'first!', 'middle!', 'last!'
 *
 * @returns {number} The product of the three returned values (i.e. multiply them)
 */
export function main() {
  const firstValue = meFirst()
  const middleValue = meMiddle()
  const lastValue = meLast()
  return firstValue * middleValue * lastValue
}

function meFirst() {
  console.log('first!')
  return 17
}

function meMiddle() {
  console.log('middle!')
  return 19
}

function meLast() {
  console.log('last!')
  return 23
}
