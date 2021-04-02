const twoSum = (nums, target) => {
    const numsMap = {};
    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];

        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
        }
    }
    return null;
}

const nums = [1, 3, 7, 9, 2];

console.log(twoSum(nums, 11));