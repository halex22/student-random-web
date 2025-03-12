import UColor from '../node_modules/@acca-alex-22/uber-color/src/utils.js'


const randomColor = UColor.random()
// const colorP = randomColor.getPalette()
const b = document.getElementById('body-id')

// const studentsCards = document.getElementsByClassName('student-container')

b.setAttribute("style", `background-color: ${randomColor.toRGB()}`)