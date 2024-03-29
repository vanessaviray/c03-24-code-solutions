/* exported getStudentNames */

function getStudentNames(students: Record<string, string>[]): string[] {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    for (const nameValue in student) {
      names.push(student[nameValue]);
    }
  }
  return names;
}
