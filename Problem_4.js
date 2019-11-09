/*
An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev fields, 
it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR linked list, 
it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
*/

// solution:

function XOR_LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (ele) {
        this.ele = ele;
        this.next = null;
        this.pre = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    // add new node
    this.add = function (ele) {
        var node = new Node(ele);
        if (head === null) { // if list is empty
            head = node;
        } else {
            var currentNode = head; // start with first node

            while (currentNode.next) { // while this node not last node
                currentNode = currentNode.next; // move to next node
            }

            currentNode.next = node; // add new node after last node
            node.pre = currentNode;
        }

        length++; // increase size
    };

    // retrive node value by it's index 
    this.eleAt = function (index) {
        var currentNode = head; // start with first node
        if (index > length-1) { // in index not found
            return "Oops!, Not Found"
        } else {
            for (let i=1 ; i <= index ; i++) { // loop over all nodes
                currentNode = currentNode.next
            }
            return currentNode.ele;
        }

    };
}

// test
var ll = new XOR_LinkedList();
ll.add('a');
ll.add('b');
ll.add('c');
ll.add('d');
console.log(ll.size()); // 4
console.log(ll.eleAt(0)); // a
console.log(ll.eleAt(1)); // b
console.log(ll.eleAt(2)); // c
console.log(ll.eleAt(3)); // d
console.log(ll.eleAt(4)); // Oops!
