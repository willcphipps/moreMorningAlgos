// write a function that returns the amount of 'energy' after each
// 'turn'. Turns are represented by looping through entire array and 
// returning to position 0. (k) represents the length of each 'jump'
// (c) is the array of clouds. (c.length % k == 0)


function jumpingOnClouds(c, k) {
    let energy = 100;
    
        for(let i = 0; i < c.length; i+=k){
            if( c[i] == 0){
                energy -=1;
            }
            else{
                energy -= 3;
            }
        }
    return energy;
}


// find out how many digits of an integer are divisable by said integer
// for example if n = 12, 1 % 12 & 2 % 12 both = 0. so the answer would be 2.


function findDigits(n) {
    let count = 0;
    let num = n.toString().split('');
    for(let i = 0; i < num.length; i++){
        if(n % parseInt(num[i]) == 0){
            count++
        }
    }
    return count;
}