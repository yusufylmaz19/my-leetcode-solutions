var longestCommonPrefix = function(strs) {
    let pre = "";
    const min = strs.reduce((a, b) => (a.length <= b.length ? a : b)).length
    for (let i = 0; i < min; i++) {
      let prefix = []
      for (let j = 0; j < strs.length; j++) {
        prefix.push(strs[j][i])
      }
      if(prefix.every(a=>a===prefix[0])){
        pre += prefix[0]
    }
    else {
        break;
    }
  }
  return pre.length==="" ? "" : pre;
};