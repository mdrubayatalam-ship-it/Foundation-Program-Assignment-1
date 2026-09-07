// Question no-1

// function describeValue(value){
     
//      if(value)
//         return console.log(`"${typeof(value)} | truthy"`);
//     else
//         return console.log(`"${typeof(value)} | falsy"`);


// }

// describeValue(NaN)

// Question no-2

// function getDayType(day = "MONDAY"){
//     let WorkingDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
//     let WeekendDays = ["Friday","Saturday"];
//     let capitalized = day.charAt(0).toUpperCase() + day.slice(1); 
//     let lowerCase = day.charAt(0) + day.slice(1).toLowerCase();
//     // return lowerCase;

//           switch (true) {
//             case WeekendDays.includes(capitalized) || WeekendDays.includes(lowerCase):
//                console.log("Weekend");
//                 break;
//             case WeekendDays.includes(lowerCase):
//                console.log("Weekend");
//                 break;

//             case WorkingDays.includes(lowerCase):
//                console.log("Working Days");
//                 break;
             
//             case WorkingDays.includes(capitalized):
//                console.log("Working Days");
//                 break;
                
                
//             default:
//                console.log("invalid day");
//                 break;
//           }

// }


// getDayType("sunday")




