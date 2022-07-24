let romansDictionary={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

 let romanToInt=(roman)=>{
    let total=0;
    let prev=0;
    for(let i=roman.length-1;i>=0;i--){
        let curr=romansDictionary[roman[i]];
        if(curr<prev){
            total-=curr;
        }
        else{
            total+=curr;
        }
        prev=curr;
    }
    return total;
}