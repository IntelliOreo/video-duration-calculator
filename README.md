# Video Duration Calculator

This project provides a function to calculate the total duration of videos or tutorials from an input string. The function can handle three different formats: `hours:minutes:seconds`,`minutes:seconds` and`(number)min`.

## Usage

### Function Definition

The main function provided is `sumHoursAndMinutesAndSeconds(patternNum, inputString)`.

### Parameters

- `patternNum` (number): Indicates the format of the time strings in the input.
  - `1` for `hours:minutes:seconds`
  - `2` for `minutes:seconds`
  - `3` for `(number)min`
- `inputString` (string): The input string containing multiple time strings.

### Example
```javascript
sumHoursAndMinutesAndSeconds(1, ` 
NOSQL Databases & DynamoDB 2:20:30
Machine Learning 101 1:02:59
EXAM 0:32:09
`);

// Returns: "3:55:38"

sumHoursAndMinutesAndSeconds(2, `
Introduction 12:34
Conclusion 225:45
`);

// Returns: "3:58:19"

sumHoursAndMinutesAndSeconds(3, `
186. Adding Token Verification
15min
Play
187. Adding Route Protection
5min
`);

// Returns: "0:20:00"

