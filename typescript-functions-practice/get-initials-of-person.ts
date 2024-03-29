/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: any): string {
  const firstName: string = person.firstName;
  const firstInitial: string = firstName.charAt(0);
  const lastName: string = person.lastName;
  const lastInitial: string = lastName.charAt(0);
  const initials: string = firstInitial + lastInitial;
  return initials;
}
