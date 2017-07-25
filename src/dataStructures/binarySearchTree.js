const TreeNode = require('./treeNode.js');

// Private method
const addNodeHelper = (value, head) => {
  if (head === null) {
    const newNode = new TreeNode(value);
    return newNode;
  } else if (value <= head.value) {
    head.left = addNodeHelper(value, head.left);
  } else {
    head.right = addNodeHelper(value, head.right);
  }
  return head;
};

module.exports = class BinarySearchTree {
  constructor(args) {
    this.head = null;
    if (Array.isArray(args) && args.length !== 0) {
      this.addNodesFromArray(args);
    } else if (Number.isInteger(args)) {
      this.addNode(args);
    } else {
      console.log('Sorry, please check your input params.');
    }
  }

  addNode(value) {
    this.head = addNodeHelper(value, this.head);
  }

  addNodesFromArray(args) {
    if (Array.isArray(args)) {
      for (let i = 0; i < args.length; i += 1) {
        this.addNode(args[i]);
      }
    } else {
      console.log('Please pass an array as in input param');
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
};
