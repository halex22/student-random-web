import Student from "../model/student.js";


export default class DataService {
  constructor() {}


   getStudentsData() {
    const studentsPromise = fetch('/assets/students.json')
    .then(res => res.json())
    .then(data => {
        console.log(this.createStudentsFromRawData(data))
        return this.createStudentsFromRawData(data)
    })
    .catch(error => console.error(error))

    return studentsPromise
  }

  /**
   * 
   * @param {array} data 
   */
  createStudentsFromRawData(data) {
    const students = data.map(studentInfo => new Student(
        studentInfo.name, studentInfo.surname, studentInfo.yob, studentInfo.nationality, studentInfo.gender, studentInfo.marks
    ))
    return students
  }

  getStudentsByName(){
     return this.getStudentsData()
     .then(students => {
      return [...students].sort((s1, s2) => s1.compareByName(s2))
     })
  }


  async getStudentsByAge() {
    const data = await this.getStudentsData() 
    return [...data].sort((s1, s2) => s1.compareByAge(s2))
  }

  getShuffledStudents() {
    const data = this.getStudentsData()
    const shuffledArray = this.shuffleArray(data)
    return shuffledArray
  }

  shuffleArray(arrayToShuffle) {
    const clonedArray = [...arrayToShuffle]
    const newArray = []

    while(clonedArray.length) {
        const randomIndex = Math.round(Math.random() * (clonedArray.length -1))
        const randomStudent = clonedArray.splice(randomIndex, 1)[0]
        newArray.push(randomStudent)
    }
    return newArray
  }
  
}
