// import UColor from '../node_modules/@acca-alex-22/uber-color/src/index.js'
import UColor from './libs/index.js'


const randomColor = UColor.random()
const b = document.getElementById('body-id')


b.setAttribute("style", `background-color: ${randomColor.toRGB()}`)