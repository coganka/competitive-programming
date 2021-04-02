var trap = function(height) {
    let left = 0, right = height.length - 1;
    let totalWater = 0;
    let maxRight = 0, maxLeft = 0;
    
    while(left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalWater += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalWater += maxRight - height[right];
            }
            right--;
        }
    }
    return totalWater
};

const test = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(test));