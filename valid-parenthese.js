var isValid = function(s) {
    const stack = [];
        if(s.length%2!==0) return false; 
        for (let i = 0; i < s.length; i++) {
          switch (s[i]) {
            case "(":
              stack.push(")");
              break;
            case "{":
              stack.push("}");
              break;
            case "[":
              stack.push("]");
              break;
            default:
              if (s[i] !== stack.pop()) {
                return false;
              }
          }
        }
        return stack.length === 0;
};

