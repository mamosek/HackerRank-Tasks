function climbingLeaderboard(scores, alice) {
    let aliceLeaderBoardResult = [],
        leaderBoard = [...new Set(scores)],
        scoresLength = scores.length,
        positionCache = {};

    function findInsertPosition(arr, val) {
        let start = 0,
            end = scoresLength;

        while (start < end) {
            let pivot = (start + end) >>> 1;
            if (arr[pivot] > val) start = pivot + 1;
            else end = pivot;
        }

        return start;
    }

    for (let i = 0; i < alice.length; i++) {
        let findPosition = findInsertPosition(leaderBoard, alice[i]);
        aliceLeaderBoardResult.push(findPosition + 1);
    }
    return aliceLeaderBoardResult;
}

module.exports = function (scores, alice) {
    return climbingLeaderboard(scores, alice);
}