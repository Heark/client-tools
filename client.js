// (C)opyright Heark
// Special Thanks Coyotte508
// Created 12/21/2014
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var time = h + ":" + m + ":" + s + " " +today;
var clientBot = "Client:"
print(clientBot+"Welcome to PO")
print(clientBot+"It is "+time)
    events = ({
        beforeSendMessage: function(message, channel) {
            var command = "",
                commandData = "",
                index = -1;

            if (message.charAt(0) === "?") {
                command = message.substr(1);
                index   = command.indexOf(" ");

                if (index != -1) {
                    command     = command.substr(0, index);
                    commandData = command.substr(index + 1);
                }

                command = command.toLowerCase();

                // Commands go here
                if (command == "reconnect"){
                   print(clientBot+" reconnecting...")
                sys.stopEvent();
                client.reconnect();
                }
                if (command == "os"){
                        print(clientBot+" The operating system you're using is: "+sys.os().toUpperCase());
                }
                if (command == "viewtiers"){
                        print(clientBot+" The tiers in this server are "+client.getTierList());
                }
                if (command == "ranking"){
                        var ranking = function (target, tar){
                                var tar = command.substr(index + 2);
                        client.seeRanking(tar)
                        }
                }
            }
            // Insert more stuff at this point
        }
    })
