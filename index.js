// toUpperCase return
function shout(string) {
  return string.toUpperCase();
}

// toLowerCase return
function whisper(string) {
  return string.toLowerCase();
}

// toUpperCase console.log()
function logShout(string) {
  console.log(string.toUpperCase());
}

// toLowerCase console.log()
function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string == string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

console.log(sayHiToHeadphonedRoommate("hello, douglas"));
console.log(sayHiToHeadphonedRoommate("I AM DOUGLAS"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
