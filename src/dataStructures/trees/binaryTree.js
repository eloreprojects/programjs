const { TreeNode } = require('./treeNode.js');

// private method.
let addNodeHelper = (value, head) => {
  if (head === null) {
    newNode = new TreeNode(value);
    return newNode;
  }
  else if (value <= head.value) {
    head.left = addNodeHelper(value, head.left);
  } else {
    head.right = addNodeHelper(value, head.right);
  }
  return head;
}

class BinaryTree {
  constructor(args) {
    this.head = null;
    if (Array.isArray(args) && args.length !== 0) {
      this.addNodesFromArray(args);
    } else if (Number.isInteger(args)) {
      this.addNode(args);
    } else {
      console.log('Sorry, please check your input params.')
    }
  }

  addNode(value) {
    this.head = addNodeHelper(value, this.head);
  }

  addNodesFromArray(args) {
    if (Array.isArray(args)) {
      for(let i = 0; i < args.length; i++) {
        this.addNode(args[i]);
      }
    } else {
      console.log("Please pass an array as in input param");
      return;
    }
  }

  printInorder() {
    TreeNode.inorderTraversal(this.head);
  }

  printPreorder() {
    TreeNode.preorderTraversal(this.head);
  }

  printPostorder() {
    TreeNode.postorderTraversal(this.head);
  }

  displayTree() {
    TreeNode.displayTree(this.head);
  }
};

module.exports = { BinaryTree }
