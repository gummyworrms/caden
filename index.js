const discord = require("discord.js");
var client = new discord.Client();

client.on("ready", () =>{
    console.log("ready to rock'n'roll");
    client.user.setActivity ("rat");
});

client.on("message", (message) => {
    if (message.author.bot) return;
  
    msg = message.content.toLowerCase();
  

  
    if(msg.startsWith ("caden")) {
      message.channel.send ("that's me baby!");
    }

    if(msg.startsWith ("tiddies")) {
        message.channel.send ("tiddies.");
      }

});

client.login('NTE1ODUxNTAxNDExNzYyMTc2.DtrKiQ._asfv333zNeZv93GFGioXiAFoHA'); 