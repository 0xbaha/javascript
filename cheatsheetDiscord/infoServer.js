console.log("Name           = " + msg.guild.name);
console.log("ID             = " + msg.guild.id);
console.log("Icon URL       = " + msg.guild.iconURL({ dynamic: true })); 
console.log("Region         = " + msg.guild.region); 
console.log("Creation Date  = " + msg.guild.createdAt); 
console.log("Owner ID       = " + server.ownerID);
console.log("Owner Tag      = " + msg.guild.owner.user.tag); 
console.log("Avail Status   = " + msg.guild.available); 
console.log("Member Count   = " + msg.guild.memberCount); 
console.log("Emojis Count   = " + msg.guild.emojis.cache.size); 
console.log("# of Roles     = " + msg.guild.roles.cache.size);  
console.log("# of Channels  = " + msg.guild.channels.cache.size); 

console.log("Verification Level       = " + msg.guild.verificationLevel); 
console.log("Explicit Content Filter  = " + msg.guild.explicitContentFilter); 

console.log("Count of Text Channels   = " + msg.guild.channels.cache.filter(c => c.type === 'text').size);
console.log("Count of Voice Channels  = " + msg.guild.channels.cache.filter(c => c.type === 'voice').size);

console.log("Online members = " + msg.guild.members.cache.filter(m => m.user.presence.status === "online").size); 
console.log("Offine members = " + msg.guild.members.cache.filter(m => m.user.presence.status === "offline").size); 
console.log("Idle members   = " + msg.guild.members.cache.filter(m => m.user.presence.status === "idle").size); 
console.log("DND members    = " + msg.guild.members.cache.filter(m => m.user.presence.status === "dnd").size); 

console.log("AFK Channel              = " + msg.guild.afkChannel);
console.log("AFK Timeout (in seconds) = " + msg.guild.afkTimeout);  

console.log("non-Bot Accounts  = " + msg.guild.members.cache.filter(m => !m.user.bot).size); 
console.log("Bot Accounts      = " + msg.guild.members.cache.filter(m => m.user.bot).size); 

msg.guild.emojis.cache.array();  //  Server Emojis List
