const WhatsApp = require('whatsapp');
const app = new WhatsApp.Web.Application({
    phoneNumber: '<your phone number>',
    apiKey: '<your API key>',
    secret: '<your secret>',
});

app.on('message', (message) => {
    const messageText = message.text;
    const senderNumber = message.from;
});
