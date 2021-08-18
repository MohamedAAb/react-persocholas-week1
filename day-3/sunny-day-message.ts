const SUNNY_DAY_MESSAGE: string="It is sunny today!";
let isSunny:boolean=true;
let numberSunnyDays:number=1;

const getIfsunnyMessage=(isSunny)=>{
  if(!isSunny){
    return "not sunny";
  }
  return "sunny";
}

/***        Returns a string saying hi, if it's sunny, 
 * and how many days in a row it has been sunny for.
 *        Example: "Hi! It is sunny Today. It has been sunny for 4 days in a row."
 */

function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {

    const sunnyMessage=getIfsunnyMessage(isSunny);
    return `Hi! It is ${sunnyMessage}. It has been sunny for ${numberSunnyDays} days`;
  }

console.log(sunnyDayMessage(true, 5));