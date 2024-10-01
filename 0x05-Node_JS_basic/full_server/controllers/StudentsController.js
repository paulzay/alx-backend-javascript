const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    readDatabase('./database.csv').then((data) => {
      res.write(`Number of students in CS: ${data['CS'].length}. List: ${data['CS'].join(', ')}\n`);
      res.write(`Number of students in SWE: ${data['SWE'].length}. List: ${data['SWE'].join(', ')}\n`);
      res.end();
    }).catch((err) => res.write(err.message))
      .finally(() => {
        res.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    let { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE\n');
      response.end();
      return;
    }
    readDatabase('./database.csv').then((data) => {
      response.write(`List: ${data[major].join(', ')}\n`);
      response.end();
    }).catch((err) => response.send(err.message));
  }
}

export default StudentsController;
