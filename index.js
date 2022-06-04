function shout(string) {
    // todo
    return string.toUpperCase();
}

function whisper(string) {
    // todo
    logShout(string)
    logWhisper(string)
    return string.toLowerCase();
}

function logShout(string) {
    // todo
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    // todo
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case string.toLowerCase():
            return "I can't hear you!";
            break;
        case string.toUpperCase():
            return "YES INDEED!";
            break;
        case string = "Let's have dinner together!":
            return "I would love to!";
            break;
        default:
            break;
    }
}
