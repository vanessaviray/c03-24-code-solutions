/* exported getValue */

function getValue(object: Record<string, string>, key: string): string {
  return object[key];
}

const squilliam = { firstName: 'Squilliam', lastName: 'Fancyson' };
getValue(squilliam, 'firstName');
