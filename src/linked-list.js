const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);
        if (this._head === null) {
            this._head = node;
            this._tail = node;
            this.length++;
            // console.log(this);
            // return this._head;
        }else{
            node.prev = this._tail;
            node.next = null
            this._tail = node;
            this.length++;
            // console.log(this);
            // console.log(node);
        }
     }

    head() { 
        // console.log(this);
        if (this.length) {
            return this._head.data
        } else {
            return null;
        }

    }

    tail() { 
        if(this.length){
            return this._tail.data
        }else{
            return null;
        }
         
    }

    at(index) { }

    insertAt(index, data) { }

    isEmpty() {
        if (this.length){
            return false;
        } else {
            return true;
        }
     }

    clear() {
        // console.log(this);
        this.length = 0;
        this._head = null;
        this._tail = null;

        // console.log('this',this);
     }

    deleteAt(index) { }

    reverse() { }

    indexOf(data) { }
}


module.exports = LinkedList;
