/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];


/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function toLoweCase(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

function greeting(name, gender, isSelf) {
    // do stuff here ...
    var greetingIndex=0;
    var prefixIndex=0;

   
    
    if(isSelf===true && gender.toLowerCase() ==="male"){
        greetingIndex=0;
        prefixIndex=0;
        
    }else if(isSelf===true && gender.toLowerCase() ==="female"){
        greetingIndex=1;
        prefixIndex=0;
    }else if(isSelf===true && gender.toLowerCase() ==="nonbinary"){
        greetingIndex=2;
        prefixIndex=0;
    }else if( gender.toLowerCase() ==="male"){
        greetingIndex=0;
        prefixIndex=1;
    }else if( gender.toLowerCase() ==="female"){
        greetingIndex=1;
        prefixIndex=2;
    }else if( gender.toLowerCase() ==="nonbinary"){
        greetingIndex=2;
        prefixIndex=3;
    }

    return  `${capitalize(greetingWords[greetingIndex])}, ${prefixes[prefixIndex]} name is ${name} `;// use template literal for string to return

  }
  

var message=greeting("Mohamed", "male", true );
console.log(message);

message=greeting("Fatima", "female", false );
console.log(message);

message=greeting("Yu", "nonbinary", false );
console.log(message);