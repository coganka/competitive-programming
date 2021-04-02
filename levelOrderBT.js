const levelOrder = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length) {
        const currentLevel = [];
        let count = 0;
        let length = queue.length;

        while(count < length) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            count++;
        }
        result.push(currentLevel);
    }
    return result;
}