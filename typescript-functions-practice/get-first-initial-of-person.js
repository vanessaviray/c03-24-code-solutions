'use strict';
/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  const firstName = person.firstName;
  const firstInitial = firstName.charAt(0);
  return firstInitial;
}
