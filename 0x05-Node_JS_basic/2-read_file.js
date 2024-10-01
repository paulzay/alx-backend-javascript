const fs = require('fs');

function countStudents() {
  try {
    const data = fs.readFileSync;
    const lines = data.toString().split('\n');
    const students = [];
    const fields = {};
    for (const line of lines) {
      if (line) {
        const student = line.split(',');
        students.push(student[0]);
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
