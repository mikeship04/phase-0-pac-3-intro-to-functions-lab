function shout(string) {
    return string.toUpperCase();
  }
function whisper(softly) {
    return softly.toLowerCase();
}
function logShout(hello) {
    console.log(hello.toUpperCase());
}
function logWhisper(silent) {
    console.log(silent.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let\'s have dinner together!"){
        return "I would love to!"
    }
}