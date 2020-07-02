// count the number of perfect squares in range between numbers (a) & (b)
// return the total numnber of perfect squares in range. 

function squares(a, b) {
    let count = 0;
    let floor = Math.sqrt(a);
    if(floor % 1 == 0){
        count++
    }else{
        floor = Math.floor(floor)
    }
    let ceil = Math.floor(Math.sqrt(b));
    while(floor < ceil){
        count+=1
        floor++
    }
    return count;
}

// return the correct fine given the due date vs the return date.
// return date is d1, m1, y1. due date is d2, m2, y2.

function libraryFine(d1, m1, y1, d2, m2, y2) {
let fine = 0
if (y1 < y2){
    fine = 0;
}
else if (y1 == y2){
    if (m1 < m2){
        fine = 0;
    }
    else if(m1 > m2){
        fine = (500 * (m1 - m2));
    }else{
        if(d1 > d2){
            fine = (15 * (d1 - d2));
        }
    }
}else{
    fine = 10000;
}
return fine;
}