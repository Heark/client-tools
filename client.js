// (C)opyright Heark
// Special Thanks Coyotte508
// Created 5/9/2014
({
        afterChannelMessage: function(
            message, channel, html) {
            if (message.indexOf(':') >=
                0) {
                msg = message.substr(
                    message.indexOf(':') +
                    2);
            }
            // Auto Commands 
            function playerKicked(msg, channel);
            client.network().sendChanMessage(
                channel,
                " HA!, Kick him again."
            );

            function PMReceived(msg, channel, html);
            client.network().sendChanMessage(
                channel,
                " You just recieved a PM!"
            );

            function disconnected();
            client.network().sendClientMessage(
                channel,
                " Client Disconnected! Trying to reconnect"
                client.reconnect(); sys.stopEvent();
                return;
            );

            // User commands

        }
        if (msg == "~sound") {
            client.openSoundConfig();
            sys.stopEvent();
        } else if (msg == ".") {
            sys.stopEvent();
            for (var i = 1; i < 4; i++) {
                client.network().sendChanMessage(channel, "This is a script test -- " + i);
            }
        } else if (msg.substr(0, 4) == "~id ") {
            print("Id of " + msg.substr(4) + ": " + client.id(msg.substr(4)) + ".");
            sys.stopEvent();
        } else if (msg.substr(0, 6) == "~spam ") {
            sys.stopEvent();
            var id = client.id(msg.substr(6));
            for (var i = 0; i < 10; i++) {
                client.network().sendPM(id, "BLEH -- " + i);
            }
        } else if (msg == "~tiers") {
            print("The tiers are: " + client.getTierList());
            sys.stopEvent();
        } else if (msg.substr(0, 6) == "~info ") {
            sys.stopEvent();
            var id = client.id(msg.substr(6));
            print("Tiers of " + msg.substr(6) + ": " + client.tiers(id) + ".");
        } else if msg == "~relog"
        client.network().sendChanMessage(channel, "Relogging..." + i);

        client.reconnect();
        sys.stopEvent();
        return;
    }
}


})
