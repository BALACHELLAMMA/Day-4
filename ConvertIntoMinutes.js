// 2. Convert to minutes
// Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

const convertTimeIntoMinutes = (timeString)=> {

    if(typeof timeString !=='string'){
        console.error('Invalid Format data');
        return false;
    }
    // Use a regular expression to match the input format "H:MM"
    const timePattern = /^(\d+):(\d+)$/;
  
    // Check the input matches the pattern
    const match = timeString.match(timePattern);
  
    if (match === null) {
        console.error("Invalid time format. Use H:MM format.");
        return false;
    }
  
    
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
  
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || minutes < 0 || minutes >= 60) {
          console.error("Invalid time values. Hours and minutes must be non-negative and minutes must be less than 60.");
          return false;
    }
  
    // convert into minutes 
    const totalMinutes = hours * 60 + minutes;
  
    return totalMinutes;
  }
  
  
const timeString = '2:30'//"00:00";
const totalMinutes = convertTimeIntoMinutes(timeString);

console.log(totalMinutes + " minutes");
    