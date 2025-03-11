import DataService from "./services/data-service.js";

const service = new DataService()
const studentListContainer = document.getElementById('student-list')
const studentsData = service.getStudentsData()

studentsData.forEach(student => {
  studentListContainer.appendChild(createStudentMarkDown(student))
})


function createStudentMarkDown (studentInfo) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('student-container')

  const studentName = createSingleInfo('h3', `${studentInfo.name + ' ' +studentInfo.surname}`)

  const studentInfoSpan = createSingleInfo('span', studentInfo.nationality)

  wrapper.append(studentName, studentInfoSpan)

  return wrapper
}


function createSingleInfo(tagName, nodeText) {
  const newTag = document.createElement(tagName)
  const tagTextNode = document.createTextNode(nodeText)
  newTag.appendChild(tagTextNode)
  return newTag
}


// To DO
//- aggiungere yob (eta) e genere
//- scheda studente a due 
// rendere il sito bello 
//- ordinare studenti  alfabetico nome