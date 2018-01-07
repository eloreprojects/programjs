/* eslint comma-dangle: ["error", "never"] */

// Private method
const findHeightHelper = (head, height) => {
  if (head == null) {
    return height;
  }
  height += 1;
  return Math.max(
    this.findHeightHelper(head.left, height),
    this.findHeightHelper(head.right, height)
  ) + 1;
};

const preorderTraversalHelper = (head, arr) => {
  if (head === null) {
    return;
  }
  arr.push(head.value);
  preorderTraversalHelper(head.left, arr);
  preorderTraversalHelper(head.right, arr);
};

const inorderTraversalHelper = (head, arr) => {
  if (head === null) {
    return;
  }
  inorderTraversalHelper(head.left, arr);
  arr.push(head.value);
  inorderTraversalHelper(head.right, arr);
};

const postorderTraversalHelper = (head, arr) => {
  if (head === null) {
    return;
  }
  postorderTraversalHelper(head.left, arr);
  postorderTraversalHelper(head.right, arr);
  arr.push(head.value);
};

module.exports = class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.value;
  }

  getLeftNode() {
    return this.left;
  }

  getRigthNode() {
    return this.right;
  }

  setValue(value) {
    this.value = value;
  }

  setLeftNode(left) {
    this.left = left;
  }

  setRightNode(right) {
    this.right = right;
  }

  static preorderTraversal(head) {
    const arr = [];
    preorderTraversalHelper(head, arr);
    return arr;
  }

  static inorderTraversal(head) {
    const arr = [];
    inorderTraversalHelper(head, arr);
    return arr;
  }

  static postorderTraversal(head) {
    const arr = [];
    postorderTraversalHelper(head, arr);
    // console.log(arr);
    return arr;
  }

  static findHeight(head) {
    return findHeightHelper(head, 0);
  }
};
