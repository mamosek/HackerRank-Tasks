var expect = require('chai').expect;
var climbing = require('../climbing-the-leaderboard.js');

describe("#Climbing()", function () {
    context('Small array test', function () {
        it('should return an array [6,4,2,1]', function () {
            expect(climbing([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])).to.eql([6, 4, 2, 1])
        })
    })

    context('Big array test', function () {
        var randomArray = function (start, end) {
            var range = [];
            var resetRange = function () {
                for (let i = start; i < end; i++) {
                    range.push(i);
                }
            };

            return function (n) {
                if (range.length === 0) {
                    resetRange();
                }
                return range.splice(0, n);
            };
        };

        var arr = randomArray(5, 10000);
        var scoresBoard = arr(1000);
        var aliceScores = arr(500);

        it('should take less than 30ms', function (done) {
            this.timeout(30);
            climbing(scoresBoard, aliceScores);
            done();
        })
    })

})