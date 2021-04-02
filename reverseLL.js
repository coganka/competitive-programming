const reverseLL = function(head) {
    let prev = null;
    let next = null;
    let current = head;

    while(current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}