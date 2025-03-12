import DataService from "./services/data-service.js";
import {HtmlCreator as MyJQuery} from "./services/html-service.js";


const service = new DataService()
const studentListContainer = document.getElementById('student-list')
const studentsData = service.getShuffledStudents()

function orderByName() {
  // const studentData = service.getStudentsByName()
  alert('I was clicked')
}

function orderByAge() {}

function shuffle() {
  const studentData = service.shuffleArray()
}


function createStudentMarkDown (studentInfo) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('student-container')

  const studentName = MyJQuery.createSingleInfo('h3', studentInfo.name + ' ' +studentInfo.surname, ['student-name'])

  const studentInfoSpan = MyJQuery.createSingleInfo('span', `nationality: ${studentInfo.nationality}`)
  const studentAgeInfo = MyJQuery.createSingleInfo('p', `Age: ${studentInfo.age}`)
  const studentGender = MyJQuery.createSingleInfo('p', `Gender: ${studentInfo.gender}`)

  wrapper.append(studentName, studentInfoSpan, studentGender, studentAgeInfo)

  return wrapper
}

function render() {
  studentsData.forEach(student => {
    studentListContainer.appendChild(createStudentMarkDown(student))
  })
}


render()

window.orderByName = orderByName;