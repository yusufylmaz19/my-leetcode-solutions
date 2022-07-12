var pivotIndex = function(nums) {
    let left=0;

    let total= nums.reduce((a,b)=>{
            return a+b;
    });

   for(let e=0; e<nums.length;e++){
      if(left===(total-nums[e])){
          return e;
      }
      else{
          left +=nums[e];
          total -=nums[e];
      }
      
  }
  return -1;
};