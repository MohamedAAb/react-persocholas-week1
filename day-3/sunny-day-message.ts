const SUNNY_DAY_MESSAGE: string="It is sunny today!";

let isSunny:boolean=true;


/***        Returns a string saying hi, if it's sunny, 
 * and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */

function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {

    if(isSunny==true){
        return`Hi! It is sunny today. It has been sunny for ${numberSunnyDays} days in a row. `
    }
    return "It's gloomy today! :(";
  }

console.log(sunnyDayMessage(true, 5));