var runningSum = function (nums) {
    let number = [];
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        number.push(nums[i]);
      } else {
        number.push(number[i - 1] + nums[i]);
      }
    }
    return number;
  };

  console.log(runningSum([1, 2, 3, 4]));