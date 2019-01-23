function compareTriplets(a, b) {
    const alice = { ratings: a, points: 0 };
    const bob = { ratings: b, points: 0 };

    for (var i = 0; i < 3; i++) {
        if (alice.ratings[i] != bob.ratings[i])
            alice.ratings[i] > bob.ratings[i] ? alice.points++ : bob.points++
    }

    return [alice.points, bob.points];

    
}

var c = compareTriplets([17, 28, 30], [99, 16, 8]);

console.log(c);


