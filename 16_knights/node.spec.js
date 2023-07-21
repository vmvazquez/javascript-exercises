const Node = require('./node');

test('Testing next', () => {
  let node = new Node(null, '5');
  expect(node.next).toEqual('5');
});
