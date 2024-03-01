const names = ['John', 'Peter', 'Mary', 'James', 'Victoria', 'Paul', 'Alice'];

const foundName = names.findLast(name => {
  console.info('Name: ', name);
  return name === 'Paul';
});

console.info('Found name: ', foundName);
