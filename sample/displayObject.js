// this sample implemented in Discord command

if (msg.mentions.users.size) {
    console.log("ADA mention");
    console.log("msg.mentions.users = " + msg.mentions.users);
    console.log("msg.mentions.users = " + JSON.stringify(msg.mentions.users));  // print the object
    console.log("msg.mentions.users = " + JSON.stringify(msg.mentions.users, null, 4));  // beautify
} else {
    console.log("TIDAK ada mention");
}

// referemce:
// https://stackoverflow.com/questions/41336663/console-logresult-returns-object-object-how-do-i-get-result-name
