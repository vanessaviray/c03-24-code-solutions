export class Node<T> {
  data: T;
  priority: number;

  constructor(data: T, priority: number) {
    this.data = data;
    this.priority = priority;
  }
}

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    const newNode = new Node(item, priority);
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].priority <= newNode.priority) {
        const array = this.nodes.splice(i, 0, newNode);
        return;
      }
    }
    this.nodes.push(newNode);
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    return this.nodes.shift()?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
