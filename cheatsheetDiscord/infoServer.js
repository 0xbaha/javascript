msg.guild.name                    // Server Name
msg.guild.id                      // Server ID
msg.guild.region                  // Server Region 
msg.guild.createdAt               // Server Creation Date
msg.guild.verificationLevel       // Server Verification Level
msg.guild.explicitContentFilter   // Server Explicit Content Filter 
msg.guild.owner.displayName       // Server Owner Display Name
msg.guild.available               // Server Available Status
msg.guild.memberCount             // Server Member Count
msg.guild.emojis.cache.size       // Server Emojis Count
msg.guild.roles.cache.size        // Server Count of Roles
msg.guild.channels.cache.size     // Server Count of Channels
msg.guild.afkChannel              // Server AFK Channel
msg.guild.afkTimeout              // Server AFK Timeout (in seconds)

msg.guild.iconURL({ format: "png", dynamic: true, size: 2048 })                 // Server Icon

msg.guild.emojis.cache.array()                                                  // Server Emojis List
msg.guild.members.cache.filter(m => m.user.bot).size                            // Numbers of Bot Accounts
msg.guild.members.cache.filter(m => !m.user.bot).size                           // Numbers of non-Bot Accounts
msg.guild.members.cache.filter(m => m.user.presence.status === "online").size   // Server Online members
msg.guild.members.cache.filter(m => m.user.presence.status === "offline").size  // Server Offline members
msg.guild.members.cache.filter(m => m.user.presence.status === "idle").size     // Server DND members
msg.guild.members.cache.filter(m => m.user.presence.status === "dnd").size      // Server Online members
