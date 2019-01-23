function diagonalDifference(arr) {
    var primDiagonal = 0,
        secDiagonal = 0;

    const length = arr.length;

    for (var i = 0; i < length; i++) {
        primDiagonal += arr[i][i];
        secDiagonal += arr[i][length - 1 - i];
    }

    return Math.abs(primDiagonal - secDiagonal);
}


var c = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);