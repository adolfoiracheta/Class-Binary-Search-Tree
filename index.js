class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value)
  }
}

//Static solution
//[10.4.15.3.6.14.20.19]
/*
        10
    4        15
  3   6   14    20
              19
*/

let tree = new binarySearchTree()
let root = new Node(10)
//assign a root to the tree
tree.root = root

let n4 = new Node(4)
root.left = new Node(4)
let n15 = new Node(15)
root.right - new Node(15)
console.log(JSON.stringify(tree))