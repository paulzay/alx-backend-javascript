interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
}

class StudentClass {
  firstName: any;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }
  
  displayName() {
    return this.firstName;
  }
}