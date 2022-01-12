const itPositiveOrNegative = (number) => {
  if (number === 0) 
    return 'neutral'
  
  if (number < 0) return 'negative'
  if (number > 0) return 'positive'
  if (isNaN(number) ) return 'not is a number'
}

module.exports = {itPositiveOrNegative}