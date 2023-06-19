function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) {
    return 0;
  }
  const sum = this.marks.reduce((acc, number) => acc + number, 0);
  const length = this.marks.length;
  return sum / length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
