function countdown(silly) {
  window.setTimeout(silly, 2)
}

function createMultiplier(multiplierValue) {
  return function (value) {
    return value * multiplierValue
  }
}
function multiplier(val1, val2){
  return val1*val2
}

var doubler =  createMultiplier(2)
var tripler =  createMultiplier(3)

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)
