class Node {
  data;
  nextNode;
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}

class LinkedList {
  #head;
  #tail;
  #size;

  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.#size === 0) {
      this.#head = newNode;
    } else {
      this.#tail.nextNode = newNode;
    }
    this.#tail = newNode;
    this.#increaseSize();
  }
  prepend(data) {
    const newNode = new Node(data);
    if (this.#size === 0) {
      this.#tail = newNode;
    } else {
      newNode.nextNode = this.#head;
    }
    this.#head = newNode;
    this.#increaseSize();
  }

  at(index) {
    let node = this.#head;
    let curr = 0;
    while (node !== null) {
      if (curr === index) return node;
      node = node.nextNode;
      curr += 1;
    }
    return null;
  }
  pop() {
    if (this.#size === 0) {
      return null;
    }

    let currentNode = this.head;
    let secondToLastNode = this.head;
    while (currentNode.nextNode !== null) {
      secondToLastNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    secondToLastNode.nextNode = null;
    this.#tail = secondToLastNode;
    this.#decreaseSize();
    if (this.#size === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }
  contains(value) {
    if (this.#size === 0) return false;
    let node = this.head;
    while (node.nextNode !== null) {
      node = node.nextNode;
      if (node.data === value) return true;
    }
    return false;
  }

  find(value) {
    let index = 0;
    if (this.#size === 0) return null;
    let node = this.head;
    while (node !== null) {
      if (node.data === value) return index;
      index += 1;
      node = node.nextNode;
    }
    return null;
  }

  toString() {
    let valueString = "";
    let node = this.head;
    while (node !== null) {
      valueString += `(${node.data}) --> `;
      node = node.nextNode;
    }
    valueString += "null";
    return valueString;
  }

  #increaseSize() {
    this.#size += 1;
  }
  #decreaseSize() {
    this.#size -= 1;
  }
  get size() {
    return this.#size;
  }

  get tail() {
    return this.#tail;
  }
  get head() {
    return this.#head;
  }
}
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("snake");
list.append("turtle");

console.log();
console.log(list.toString());
