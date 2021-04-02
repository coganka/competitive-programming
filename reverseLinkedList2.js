const reverse = function(head, m, n) {
    let curPos = 1, curNode = head;
    let start = head;
    while (curPos < m) {
        start = curNode;
        curNode = curNode.next;
        curPos++;
    }

    let newList = null;
    tail = curNode;
    while (curPos >= m && curPos <= n) {
        const next = curNode.next;
        curNode.next = newList;
        newList = curNode;
        curNode = next;
        curPos++;
    }
    start.next = newList;
    tail.next = curNode;

    if (m > 1) {
        return head;
    } else {
        return newList;
    }
}