export default class Student {
  constructor(name, surname, yob, nationality, gender, marks=[]) {
    this.name = name
    this.surname = surname
    this.yob = yob
    this.nationality = nationality
    this.gender = gender
    this.marks = marks
  }

  get age() {
    return new Date().getFullYear() - this.yob
  }

  get studentMean() {
    return undefined
  }

}