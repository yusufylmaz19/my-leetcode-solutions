let isPalindrome=(x)=>{
    straight=x.toString();
    reverse=straight.split('').reverse().join('');
    if(straight===reverse){
      return true;
    }
    else 
    return false;
  }