// this sample implemented in Discord command

var sum = msg.mentions.users.size;  // sum of mentioned users
var Mentioned = msg.mentions.users; // the mentioned users

// takes a JavaScript object and then transforms it into a JSON string.
var MentionedSTR = JSON.stringify(Mentioned);   
// beautify 
var MentionedSTRbeauty = JSON.stringify(Mentioned, null, 4);

// print all to console
if (sum > 0) {
    console.log("ADA mention");
    console.log("\n\n>>> sum = " + sum);
    console.log("\n\n>>> msg.mentions.users <<<\n\n" + Mentioned);
    console.log("\n\n>>> JSON.stringify(Mentioned) <<<\n\n" + MentionedSTR);  // print the object
    console.log("\n\n>>> JSON.stringify(Mentioned, null, 4) <<<\n\n" + MentionedSTRbeauty);  // beautify
} else {
    console.log("TIDAK ada mention");
}

// print the ID of each mentioned user
console.log("\n\n>>> print the ID of each mentioned user <<<\n");
for (i = 0; i < sum; i++) {
    console.log("ID = " + JSON.parse(MentionedSTR)[i].id);
}

// referemce:
// https://stackoverflow.com/questions/41336663/console-logresult-returns-object-object-how-do-i-get-result-name
