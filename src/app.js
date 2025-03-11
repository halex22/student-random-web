import DataService from "./services/data-service.js";
import HtmlCreator from "./services/html-service.js";
import { calculateAge } from "./services/misc.mjs";


const service = new DataService()
const studentListContainer = document.getElementById('student-list')
const studentsData = service.getStudentsData()

studentsData.forEach(student => {
  studentListContainer.appendChild(createStudentMarkDown(student))
})


function createStudentMarkDown (studentInfo) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('student-container')

  const studentName = HtmlCreator.createSingleInfo('h3', `${studentInfo.name + ' ' +studentInfo.surname}`, ['student-name'])

  const studentInfoSpan = HtmlCreator.createSingleInfo('span', `nationality: ${studentInfo.nationality}`)
  const studentAgeInfo = HtmlCreator.createSingleInfo('p', `Age: ${calculateAge(studentInfo.yob)}`)
  const studentGender = HtmlCreator.createSingleInfo('p', `Gender: ${studentInfo.gender}`)

  wrapper.append(studentName, studentInfoSpan, studentGender, studentAgeInfo)

  return wrapper
}





// To DO
//- aggiungere yob (eta) e genere
//- scheda studente a due 
// rendere il sito bello 
//- ordinare studenti  alfabetico nome