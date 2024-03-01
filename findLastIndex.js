const names = ['John', 'Peter', 'Mary', 'James', 'Victoria', 'Paul', 'Alice'];

const index = names.findLastIndex(name => {
  console.info('Name: ', name);
  return name === 'Paul';
});

console.info('Index: ', index);

