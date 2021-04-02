const flatten = function(head) {
    if (!head) return head;
    let current = head;

    while(current !== null) {
        if (current.child === null) {
            current = current.next;
        } else {
            let tail = current.child;
            while(tail.next !== null) {
                tail = tail.next;
            }
            tail.next = current.next;
            if (tail.next !== null) {
                tail.next.prev = tail;
            }
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        }
    }
    return head;
}