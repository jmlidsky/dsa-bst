const BinarySearchTree = require('./bst')

function main() {
    const BST = new BinarySearchTree()

    BST.insert(3);
    BST.insert(1);
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);

    console.log(BST)
}

main()