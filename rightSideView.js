const rightSideView = function(root) {
    const result = [];
    dfs(root, 0, result);
    return result;
}

const dfs = function(node, currentLevel, result) {
    if (!node) return;
    
    if (currentLevel >= result.length) {
        result.push(node.value);
    }
    if (node.right) {
        dfs(node.right, currentLevel + 1, result);
    }
    if (node.left) {
        dfs(node.left, currentLevel + 1, result);
    }
}