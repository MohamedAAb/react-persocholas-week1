var SUNNY_DAY_MESSAGE = "It is sunny today!";
var isSunny = true;
var numberSunnyDays = 1;
var getIfsunnyMessage = function (isSunny) {
    if (!isSunny) {
        return "not sunny";
    }
    return "sunny";
};
/***        Returns a string saying hi, if it's sunny,
 * and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */
function sunnyDayMessage(isSunny, numberSunnyDays) {
    var sunnyMessage = getIfsunnyMessage(isSunny);
    return "Hi! It is " + sunnyMessage + ". It has been sunny for " + numberSunnyDays + " days";
}
console.log(sunnyDayMessage(true, 5));
