const fs = require('fs');

function countStudents(path) {
  try {
    const nstudent = fs.readFileSync(path, 'utf8').split('\n');
    const nstudents = nstudent.slice(1);
    const filteredStudents = nstudents.filter((item) => item);
    console.log(`Number of students: ${filteredStudents.length}`);
    const fields = {};
    for (const i of filteredStudents) {
      const student = i.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const key of Object.keys(fields)) {
      if (key) {
        const list = fields[key];
        console.log(`Number of students in ${key}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
