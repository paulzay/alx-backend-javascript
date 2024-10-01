const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database asynchronously'));
        return;
      }

      const nstudents = data.split('\n').slice(1).filter((item) => item);
      console.log(`Number of students: ${nstudents.length}`);

      const fields = {};
      for (const i of nstudents) {
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

      resolve();
    });
  });
}

module.exports = countStudents;
