import { Node, PriorityQueue } from './queue';

describe('enqueue', () => {
  it('adds value in priority order', () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);
    queue.enqueue('b', 18);
    queue.enqueue('g', 25);
    queue.enqueue('a', 15);
    queue.enqueue('m', 30);
    queue.enqueue('z', 50);
    queue.enqueue('n', 31);
    queue.enqueue('w', 40);

    expect(queue.nodes[0]).toEqual(new Node('z', 50));
    expect(queue.nodes[1]).toEqual(new Node('w', 40));
    expect(queue.nodes[2]).toEqual(new Node('n', 31));
    expect(queue.nodes[3]).toEqual(new Node('m', 30));
    expect(queue.nodes[4]).toEqual(new Node('g', 25));
    expect(queue.nodes[5]).toEqual(new Node('c', 20));
    expect(queue.nodes[6]).toEqual(new Node('b', 18));
    expect(queue.nodes[7]).toEqual(new Node('a', 15));
    expect(queue.nodes.length).toEqual(8);
  });

  it('adds single value', () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);

    expect(queue.nodes[0]).toEqual(new Node('c', 20));
    expect(queue.nodes.length).toEqual(1);
  });

  it('adds equal priority last-in/first-out', () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);
    queue.enqueue('b', 18);
    queue.enqueue('a', 15);
    queue.enqueue('a2', 15);
    queue.enqueue('b2', 18);
    queue.enqueue('a3', 15);

    expect(queue.nodes[0]).toEqual(new Node('c', 20));
    expect(queue.nodes[1]).toEqual(new Node('b2', 18));
    expect(queue.nodes[2]).toEqual(new Node('b', 18));
    expect(queue.nodes[3]).toEqual(new Node('a3', 15));
    expect(queue.nodes[4]).toEqual(new Node('a2', 15));
    expect(queue.nodes[5]).toEqual(new Node('a', 15));
    expect(queue.nodes.length).toEqual(6);
  });
});

describe('dequeue', () => {
  it('returns undefined when empty', () => {
    const queue = new PriorityQueue();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('removes and returns the highest priority value', () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);
    queue.enqueue('b', 18);
    queue.enqueue('g', 25);
    queue.enqueue('a', 15);
    queue.enqueue('m', 30);
    queue.enqueue('z', 50);
    queue.enqueue('n', 31);
    queue.enqueue('w', 40);

    expect(queue.dequeue()).toEqual('z');
    expect(queue.dequeue()).toEqual('w');
    expect(queue.dequeue()).toEqual('n');
    expect(queue.dequeue()).toEqual('m');
    expect(queue.dequeue()).toEqual('g');
    expect(queue.dequeue()).toEqual('c');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.dequeue()).toEqual('a');
    expect(queue.dequeue()).toBeUndefined();
  });

  it('removes and returns equal priority last-in/first-out', () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);
    queue.enqueue('b', 18);
    queue.enqueue('a', 15);
    queue.enqueue('a2', 15);
    queue.enqueue('b2', 18);
    queue.enqueue('a3', 15);

    expect(queue.dequeue()).toEqual('c');
    expect(queue.dequeue()).toEqual('b2');
    expect(queue.dequeue()).toEqual('b');
    expect(queue.dequeue()).toEqual('a3');
    expect(queue.dequeue()).toEqual('a2');
    expect(queue.dequeue()).toEqual('a');
    expect(queue.dequeue()).toBeUndefined();
  });
});

describe('peek', () => {
  it('returns undefined when empty', () => {
    const queue = new PriorityQueue();
    expect(queue.peek()).toBeUndefined();
  });

  it("returns the highest priority value, but doesn't remove it", () => {
    const queue = new PriorityQueue<string>();
    queue.enqueue('c', 20);
    queue.enqueue('b', 18);
    queue.enqueue('g', 25);

    expect(queue.peek()).toEqual('g');
    expect(queue.nodes[0]).toEqual(new Node('g', 25));
    expect(queue.nodes[1]).toEqual(new Node('c', 20));
    expect(queue.nodes[2]).toEqual(new Node('b', 18));
    expect(queue.nodes.length).toEqual(3);
  });
});
