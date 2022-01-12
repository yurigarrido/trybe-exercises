const { expect } = require('chai');
const { itPositiveOrNegative} = require('../itPositiveOrNegative')

const negativeResponse = itPositiveOrNegative(-4)
// const positiveResponse = itPositiveOrNegative(1)
// const neutralResponse = itPositiveOrNegative(0)

describe('testing func itPositiveOrNegative with number positive', () => {

  it('pass the function a positive number', () => {
    const positiveResponse = itPositiveOrNegative(1)
    expect(positiveResponse).to.be.equals('positive')
  })

  it('pass the function a negative number', () => {
    const negativeResponse = itPositiveOrNegative(-4)
    expect(negativeResponse).to.be.equals('negative')
  })

  it('pass the function a neutral number', () => {
    const neutralResponse = itPositiveOrNegative(0)
    expect(neutralResponse).to.be.equals('neutral')
  })

  it('call the function passing a string instead of a number', () => {
    const incorrectResponse = itPositiveOrNegative('olá')
    expect(incorrectResponse).to.be.equals('not is a number')
  })
})
