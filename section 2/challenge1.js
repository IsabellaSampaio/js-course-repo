/* Dolphins and Koalas, check who's the winner using different types of functions */

const calcAverage = (score1, score2, score3) => (score1, score2, score3) / 3;

const scoreDolphins = calcAverage();
const scoreKoalas = calcAverage();

const checkWiner = function (avgDolphins, avgKoalas) {
    if(avgDolphins * 2 > avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas * 2 > avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log("No team wins...");
    }
}
