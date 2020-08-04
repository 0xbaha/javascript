// Command Author
msg.author          // object (mentioned)
msg.author.tag      // tag
msg.author.id       // ID
msg.author.bot      // bot (true/false)
member.displayName  // nickname

// Command Author Avatar URL
msg.author.displayAvatarURL();
msg.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 });
