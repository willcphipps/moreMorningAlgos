// create a function that moves an array (a) an a 'circular' fashion
// (k) number of times. Return the index positions as delineated in
// the array of integers in the array (queries) 


function circularArrayRotation(a, k, queries) {
    let temp = 0;
    let i = 0
    while(i<k){
        temp = a[a.length-1]
        a.pop()
        a.unshift(temp)
        i++
    }
    let arr = [];
    let temp2 = 0;
    for(let y = 0; y < queries.length; y++){
        temp2 = queries[y]
        arr.push(a[temp2]);
    }
    return arr;
}
