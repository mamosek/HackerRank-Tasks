function jumpingOnClouds(c) {
    var jumpsCount = 0,
        index = 0;
    while (index < c.length - 1) {

        //try jump 2 more
        if (c[index + 2] !== 1 && index + 2 < c.length) {
            index = index + 2;
        } else {
            index = index + 1;
        }

        jumpsCount += 1;


    }
    return jumpsCount;
}


var c = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0, 0, 0]);
console.log(c);