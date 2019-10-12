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
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }
        this.length++;

        return this;
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
        if (this.length) {
            return this._tail.data
        } else {
            return null;
        }

    }

    at(index) {
        let position = this.getNode(index);
        return position.data;
    }

    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let node;
        //if index near the start
        if (index < this.length / 2) {
            node = this._head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else { //if index near the end
            node = this._tail;
            for (let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }
        }

        return node;
    }

    insertAt(index, data) {
        if (index < 0 || index > this.length) {
            return false;
        }

        let node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            let prevNode = this.getNode(index - 1);
            let nextNode = prevNode.next;
            prevNode.next = node;
            node.prev = prevNode;
            node.next = nextNode;
            nextNode.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length) {
            return false;
        } else {
            return true;
        }
    }

    clear() {

        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (this.length === 1) {
            this._head = null;
            this._tail = null;
        } else {
            let node = this.getNode(index);
            let prevNode = node.prev;
            let nextNode = node.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            node.next = null;
            node.prev = null;
        }
        this.length--;
        return this;
    }

    reverse() {
        let tmp = null;
        let position = this._head;
        this._tail = position;
        while (position != null) {
            tmp = position.prev;
            position.prev = position.next;
            position.next = tmp;
            position = position.prev;
        }
        if (tmp !== null) {
            this._head = tmp.prev;
        }
        return this;
    }

    indexOf(data) {
        for (let i = 0; i < this.length; i++) {
            let node = this.at(i);
            if (node === data) {
                return i;
            }
        }
        return -1;
    }
}


module.exports = LinkedList;
