var twoSum = function(nums, target) {
  var temp = {}
  for (let i = 0; i < nums.length; i ++) {
      var diff = target - nums[i]
      console.log(temp[diff])
      if (temp[diff]) {
          return [temp[diff], i]
      }
      temp[nums[i]] = i
  }
};
var target = 9
var arr = [2,7,11,15]

console.log(twoSum(arr, target))