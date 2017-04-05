var twilio = require("twilio");

// Your Account SID and Auth Token from www.twilio.com/console
var accountSid = '<REPLACE_HERE>';
var authToken = '<REPLACE_HERE>';

var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
        body: 'Hello World!!! twilio-sms-bot using node',
        to: '+5561912345678', // Number that receives the SMS
        from: '+1234567890' // Purchased Twilio number that send the SMS
    },
    function(err, message) {
        console.log(message.sid);
    });
