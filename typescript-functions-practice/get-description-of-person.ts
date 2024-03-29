/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: any): string {
  const description: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return description;
}
