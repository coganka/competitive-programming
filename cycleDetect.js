const cycleDetect = function(head) {
    if (!head) return null;
    let tortoise = head;
    let hare = head;

    while(true) {
        tortoise = tortoise.next;
        hare = hare.next;
        if (hare === null || hare.next === null) {
            return null;
        } else {
            hare = hare.next;
        }
        if (tortoise === hare) break;
    }
    let p1 = head;
    let p2 = tortoise;
    
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}