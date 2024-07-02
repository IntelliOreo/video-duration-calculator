function sumHoursAndMinutesAndSeconds(patternNum,inputString) {
    // Regular expression to match all occurrences of the pattern "number:number"
    const pattern1 = /\b(\d+):(\d+):(\d+)\b/g;
    const pattern2 = /\b(\d+):(\d+)\b/g;
    let match;
    let totalHrs = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    // Iterate over all matches of the pattern in the input string
    patternNum == 1 ? pattern = pattern1 : pattern = pattern2;
  
    while ((match = pattern.exec(inputString)) !== null) {
        // Add minutes and seconds to their respective totals
      
      if(patternNum == 1){
        totalHrs += parseInt(match[1], 10);
        totalMinutes += parseInt(match[2], 10);
        totalSeconds += parseInt(match[3], 10);
      } else if(patternNum == 2){
        totalMinutes += parseInt(match[1], 10);
        totalSeconds += parseInt(match[2], 10);
      }
        
    }

    // Convert excess seconds into minutes
    totalMinutes += Math.floor(totalSeconds / 60);
    totalSeconds %= 60;

    // Convert excess minutes into hours
    const totalHours = totalHrs + Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    // Return the total time as a string in the format "hours:minutes:seconds"
    const answer = `${totalHours}:${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;

    console.log(answer)
    return answer;
  
}
// Example usages: 
sumHoursAndMinutesAndSeconds(1, `
NOSQL Databases & DynamoDB 2:20:30
Machine Learning 101 1:02:59
EXAM 0:32:09
`);

sumHoursAndMinutesAndSeconds(2, `
Introduction 12:34
Conclusion 225:45
`);



