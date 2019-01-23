function countingValleys(n, s) {

    var levelBySea = 0,
        valleysCount = 0;


    for (var i = 0; i < n; i++) {
        levelBySea = s.charAt(i) === "U" ? levelBySea + 1 : levelBySea - 1;

        if (levelBySea === 0 && s.charAt(i) === "U")
            valleysCount++;
    }

    return valleysCount;
}



var res = countingValleys(8, "UDDDUDUU");
console.log(res);