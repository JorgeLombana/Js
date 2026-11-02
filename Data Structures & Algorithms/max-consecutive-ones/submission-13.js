class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMaxConsecutiveOnes(nums) {
    let maxCounted = 0;
    let maxAchieved = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        maxCounted++;
      } else {
        maxAchieved < maxCounted ? maxAchieved = maxCounted : ''
        maxCounted = 0;
      }
    }
    if (maxCounted > maxAchieved) {
      maxAchieved = maxCounted
    }
    return maxAchieved
  }
}