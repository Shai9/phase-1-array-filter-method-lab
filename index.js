// Code your solution here

function findMatching(src, sought) {
  return src.filter(
    (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
  );
}

function fuzzyMatch(src, testString) {
  return src.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(src, soughtName) {
  return src.filter((record) => record.name === soughtName);
}