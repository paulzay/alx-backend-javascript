interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'USA',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'UK',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');

const theadRow = document.createElement('tr');

const th1 = document.createElement('th');
th1.textContent = 'firstName';
theadRow.appendChild(th1);

const th2 = document.createElement('th');
th2.textContent = 'lastName';
theadRow.appendChild(th2);

const th3 = document.createElement('th');
th3.textContent = 'age';
theadRow.appendChild(th3);

const th4 = document.createElement('th');
th4.textContent = 'location';
theadRow.appendChild(th4);

thead.appendChild(theadRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.textContent = student.firstName;
  tr.appendChild(td1);

  const td2 = document.createElement('td');
  td2.textContent = student.lastName;
  tr.appendChild(td2);

  const td3 = document.createElement('td');
  td3.textContent = student.age.toString();
  tr.appendChild(td3);

  const td4 = document.createElement('td');
  td4.textContent = student.location;
  tr.appendChild(td4);

  tbody.appendChild(tr);
});

table.appendChild(tbody);
