const TreeNode = require('./treeNode.js');

// Private method
const addNodeHelper = (value, head) => {
  if (head === null) {
    const newNode = new TreeNode(value);
    return newNode;
  } if (value <= head.value) {
    head.left = addNodeHelper(value, head.left);
  } else {
    head.right = addNodeHelper(value, head.right);
  }
  return head;
};

module.exports = class BinarySearchTree {
  constructor(args) {
    this.head = null;
    if (args !== undefined) {
      if (Array.isArray(args)) {
        this.addNodesFromArray(args);
      } else {
        this.addNode(args);
      }
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

  inorderTraversal() {
    return TreeNode.inorderTraversal(this.head);
  }

  preorderTraversal() {
    return TreeNode.preorderTraversal(this.head);
  }

  postorderTraversal() {
    return TreeNode.postorderTraversal(this.head);
  }
};
