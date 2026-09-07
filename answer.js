// Question no-1

function describeValue(value){
     
     if(value)
        return `"${typeof(value)} | truthy"`;
    else
        return `"${typeof(value)} | falsy"`;


}

console.log(describeValue(25));

// // Question no-2

function getDayType(day = "MONDAY"){
    let WorkingDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
    let WeekendDays = ["Friday","Saturday"];
    let capitalized = day.charAt(0).toUpperCase() + day.slice(1); 
    let lowerCase = day.charAt(0) + day.slice(1).toLowerCase();
    // return lowerCase;

          switch (true) {
            case WeekendDays.includes(capitalized) || WeekendDays.includes(lowerCase):
               return `"Weekend"`;
                break;
            case WeekendDays.includes(lowerCase):
               return `"Weekend"`;
                break;

            case WorkingDays.includes(lowerCase):
               return `"Working Day"`;
                break;
             
            case WorkingDays.includes(capitalized):
               return`"Working Day"`;
                break;
                
                
            default:
               return `"invalid day"`;
                break;
          }

}

console.log(getDayType("sunday"));

// // Question no-3

function validateUsername(username){
   
    
   switch (true) {
    case username.length < 4:
        return `"Too Short"`
        break;

    case username.includes(" "):
       return `"No Space Allowed"` ;
       break;

    case username.toLowerCase().includes("admin"):
       return `"Reserved Word"` ;
       break;  
    
   
    default:
        return `"Available"`; 
        break;
   }
    
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("Admin_Rahim"));

// validateUsername("ab")
// validateUsername("a b")
// validateUsername("abcd")
// validateUsername("rahim islam")	
// validateUsername("superadmin99")
// validateUsername("Admin_Rahim")	


// // Question no-4

function getCngFare(distance, isNight=false, waitingMinutes=0){
     
  let totalFare = 50;
  let waitingCharge = waitingMinutes * 2;
  let nightPercentage = (20/100);

    if(distance > 2)
        totalFare += (distance-2)*15
      
    totalFare += waitingCharge;
     
    let nightExtra = totalFare * nightPercentage;

    if(isNight)
         totalFare = totalFare + nightExtra;   
    
   return totalFare;
}

console.log(getCngFare(5, true, 10));

getCngFare(2)
getCngFare(1)
getCngFare(5)
getCngFare(10)
getCngFare(5, false, 10)
getCngFare(5, true)
getCngFare(5, true, 10)


// Question no-5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runNeeded = target - scored;
    let requiredRate = (runNeeded / ballsLeft) * 6;

    if(!runNeeded)
        return "Won";
    if(!ballsLeft)
        return "Lost";
    if(requiredRate <= 6)
        return `"Need ${runNeeded} runs in ${ballsLeft} balls | Comfortable"`;
    if(requiredRate > 6 && requiredRate < 12)
        return `"Need ${runNeeded} runs in ${ballsLeft} balls | Tough"`;
    if(requiredRate >= 12)
        return `"Need ${runNeeded} runs in ${ballsLeft} balls | Almost Impossible"`;

}

console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));