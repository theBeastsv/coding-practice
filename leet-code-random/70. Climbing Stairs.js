

function steps(n){
    if (n<= 1)
    {return 1;}
    
    let arr= new Array(n+1)
    arr[0]=1;
    arr[1]=1;
    // console.log(arr)
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
        
    }
    return arr[n]
}




console.log(steps(4))