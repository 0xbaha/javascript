// this sample implemented in Discord command

var authorAvatarURL = msg.author.displayAvatarURL();
var sum = msg.mentions.users.size;  // sum of mentioned users
var isMentioned = false;
var Mentioned = msg.mentions.users; // the mentioned users

// takes a JavaScript object and then transforms it into a JSON string.
var MentionedSTR = JSON.stringify(Mentioned);   
// beautify 
var MentionedSTRbeauty = JSON.stringify(Mentioned, null, 4);

// print author avatar
console.log("\n>>> authorAvatarURL = " + authorAvatarURL);

// print all to console
if (sum > 0) {
  isMentioned = true;
  console.log("\nADA mention");
  console.log("\n\n>>> sum = " + sum);
  console.log("\n\n>>> msg.mentions.users <<<\n\n" + Mentioned);
  console.log("\n\n>>> JSON.stringify(Mentioned) <<<\n\n" + MentionedSTR);  // print the object
  console.log("\n\n>>> JSON.stringify(Mentioned, null, 4) <<<\n\n" + MentionedSTRbeauty);  // beautify
} else {
  isMentioned = false;
  console.log("\nTIDAK ada mention");
}

// print the ID of each mentioned user
avatarURLs = []; // inisialisasi
console.log("\n>>> print the ID of each mentioned user <<<\n");
if (isMentioned){
  for (i = 0; i < sum; i++) {
    console.log("ID = " + JSON.parse(MentionedSTR)[i].id);
    // menambahkan URL avatar format PNG ke array
    avatarURLs.push(JSON.parse(MentionedSTR)[i].displayAvatarURL.replace(/webp/gi,"png?size=2048"));
  }
} else {
  avatarURLs.push(authorAvatarURL.replace(/webp/gi,"png?size=2048"));
}

// menampilkan avatar setiap yang dimention
if (sum === 0) {
  for (i = 0; i <= sum; i++) {
    console.log("\navatarURLs["+ i +"] = " + avatarURLs[i]);
    msg.channel.send(avatarURLs[i]);
  }
} else {
  for (i = 0; i < sum; i++) {
    console.log("\navatarURLs["+ i +"] = " + avatarURLs[i]);
    msg.channel.send(avatarURLs[i]);
  }
}

// References:
// https://stackoverflow.com/questions/41336663/console-logresult-returns-object-object-how-do-i-get-result-name
// https://medium.com/javascript-in-plain-english/how-to-use-stringify-and-parse-in-javascript-6b637b571a32
