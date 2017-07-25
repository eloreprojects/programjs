// private method.
const findHeightHelper = (head, height = 0) => {
  if (head == null) {
    return height;
  }
  height += 1;
  return Math.max(findHeightHelper(head.left, height), findHeightHelper(head.right, height));
};

class TreeNode {
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
    if (head === null) {
      return;
    }
    console.log(head.value);
    this.preorderTraversal(head.left);
    this.preorderTraversal(head.right);
  }

  static inorderTraversal(head) {
    if (head === null) {
      return;
    }
    this.inorderTraversal(head.left);
    console.log(head.value);
    this.inorderTraversal(head.right);
  }

  static postorderTraversal(head) {
    if (head === null) {
      return;
    }
    this.postorderTraversal(head.left);
    this.postorderTraversal(head.right);
    console.log(head.value);
  }

  static findHeight(head) {
    return findHeightHelper(head);
  }
}

module.exports = TreeNode;
