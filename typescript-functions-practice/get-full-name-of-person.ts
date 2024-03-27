/* exported getFullNameOfPerson */
function getFullNameOfPerson(person: any): string {
  const fullName: string = `${person.firstName} ${person.lastName}`;
  return fullName;
}
