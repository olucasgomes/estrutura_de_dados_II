class Node {
  constructor (key, parent = null, leftChild = null, rightChild = null) {
    this.key = key
    this.parent = parent
    this.leftChild = leftChild
    this.rightChild = rightChild
  }

  depth () {
    return this.isRoot() ? 0 : this.parent.isRoot() + 1
  }

  hasBothChildren () {
    return !!this.leftChild && !!this.rightChild
  }

  hasLeftChild () {
    return !!this.leftChild
  }

  hasRightChild () {
    return !!this.rightChild
  }

  isLeaf () {
    return !this.leftChild && !this.rightChild
  }

  isRoot () {
    return this.parent === null
  }

  isLeftChild () {
    return this.parent.leftChild === this
  }

  isRightChild () {
    return this.parent.rightChild === this
  }
}

export default Node
