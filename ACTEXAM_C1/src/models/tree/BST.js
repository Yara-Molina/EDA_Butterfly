import Node from "./Node.js"

class BST{
    #root

    constructor(){
        this.#root= null
    }

    add(value) {
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null) 
            return true
        }
        else
            return this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if (value.simpleName < node.value.simpleName){
            if (node.left == null){
                node.left = new Node(value)
                if (node.left != null) return true
            }
            else
                return this.insertNode(node.left, value)
        } else {
            if (node.right == null){
                node.right = new Node(value)
                if (node.right != null) return true
            }
            else
                return this.insertNode(node.right, value)
        }
    }

    getRoot() {
        return this.#root
    }

    search(simpleName){
       return this.searchNode(this.#root,simpleName)
    }
    

    searchNode(node,simpleName){
        if(node== null || node.value.simpleName === simpleName)
            return node
        else if(simpleName < node.value.simpleName)
            return this.searchNode(node.left, simpleName)
        else
           return this.searchNode(node.right, simpleName)
    }

    inOrder(node,callback){
    if(node!== null){
        this.inOrder(node.left , callback)
        callback(node.value)
        this.inOrder(node.right, callback)
    }

   }
   
   MinNode(node) {
        if (node == null || node.left == null) {
            return node;
        } else {
            return this.MinNode(node.left);
        }
    }

    min() {
        return this.MinNode(this.#root);
    }

    MaxNode(node) {
        if (node == null || node.right == null) {
            return node;
        } else {
            return this.MaxNode(node.right);
        }
    }

    max() {
        return this.MaxNode(this.#root);
    }
    
}

export default BST
