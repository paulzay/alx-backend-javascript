const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const students = data.split('\n');
    const header = students.shift().split(',');
    const result = [];
    for (const student of students) {
      if (student) {
        const studentData = student.split(',');
        const studentObj = {};
        for (const [i, field] of studentData.entries()) {
          studentObj[header[i]] = field;
        }
        result.push(studentObj);
      }
    }
    return result;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
