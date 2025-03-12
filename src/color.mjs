import UColor from '../node_modules/@acca-alex-22/uber-color/src/index.js'


const randomColor = UColor.random()
console.log(randomColor.toRGB())

const b = document.getElementById('body-id')
b.setAttribute("style", `background-color: ${randomColor.toRGB()}`)