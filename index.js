const nodemailer = require('nodemailer');
const fs = require('fs');
const template = require('./template');

var self = this

fs.readFile(__dirname + '/booking.html', 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    // tmp = data;
   // temp(data);

    const transport = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true,
        auth: {
            user: 'arbimauday@gmail.com',
            pass: 'arbianto101'
        }
    });

    const message = {
        from: 'arbimauday@gmail.com', // Sender address
        to: 'arbi@globalxtreme.net',         // List of recipients
        subject: 'Test Trops', // Subject line
        // generateTextFromHTML: true,
        html: data
    };

    transport.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });


});