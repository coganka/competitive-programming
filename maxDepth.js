const depth = function(node, currentDepth) {
    if (!node) return currentDepth;
    currentDepth++;
    return Math.max(depth(node.left, currentDepth), depth(node.right, currentDepth));
}