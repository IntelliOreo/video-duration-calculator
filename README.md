# Video Duration Calculator

This project provides a simple function to calculate the total duration of videos or tutorials from an input string. The function can handle two different formats: `hours:minutes:seconds` and `minutes:seconds`.

## Usage

### Function Definition

The main function provided is `sumHoursAndMinutesAndSeconds(patternNum, inputString)`.

### Parameters

- `patternNum` (number): Indicates the format of the time strings in the input.
  - `1` for `hours:minutes:seconds`
  - `2` for `minutes:seconds`
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


