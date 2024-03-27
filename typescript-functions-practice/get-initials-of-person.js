'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const firstName = person.firstName;
  const firstInitial = firstName.charAt(0);
  const lastName = person.lastName;
  const lastInitial = lastName.charAt(0);
  const initials = firstInitial + lastInitial;
  return initials;
}
