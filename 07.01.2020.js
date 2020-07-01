// print the factorial of given integer (n). Where sum == n * (n-1) * (n-2)...






function extraLongFactorials(n) {
    let sum = 1;
    for(let i = n; i > 0; i--){
        sum = BigInt(sum)*BigInt(i);
    }
    console.log(BigInt(sum).toString())
}



// given two arrays of strings, (s) & (t), can you transform (t) into (s)
// with (k) number of iterations. Return Yes or No for each case.


function appendAndDelete(s, t, k) {
    let count = 0
    for (var i = 0; i < Math.min(t.length, s.length); i++){
        if(s[i] == t[i]){
            count++
        }else{
            break;
        }
    }
    let max = s.length + t.length;
    let min = max - (2 * count);
    if((k >= min) && (k-min) % 2 == 0){
        return "Yes";
    } else if (k >= max) {
        return "Yes";
    } else {
        return "No";
    }
}