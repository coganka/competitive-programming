function rainwater(heights) {
    let left = 0, right = heights.length - 1;
    let totalWater = 0, maxRight = 0, maxLeft = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                totalWater += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                totalWater += maxRight - heights[right];
            }
            right--;
        }
    }
    return totalWater;
}

const heights = [0, 1, 0, 3, 2, 6, 0];
console.log(rainwater(heights));