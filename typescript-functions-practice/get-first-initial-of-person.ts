/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person: any): string {
  const firstName: string = person.firstName;
  const firstInitial: string = firstName.charAt(0);
  return firstInitial;
}
