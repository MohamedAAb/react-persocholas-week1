
//examples of all valid Json types
const myInfo={
    "name":"Mohamed",
    "birthday":010101,
    "citiesLivedIn":["Houston", "Brooklyn", "Nashville", "Dammam", "Cairo", "Alexandria"],
    "isMarried":false,
    "planetsVsisited":null,
    "personalInfo":{
        "favoriteFood":"Bashamel Pasta"
    }
};

console.log("myInfo in Json Format",myInfo);
console.log("myInfo in StringFormat",JSON.stringify(myInfo));