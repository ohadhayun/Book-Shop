require('../data/database');

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const contactModel = require('../Models/contactUsModel')



router.post('/send', (req, res) => {
    const output = `
    <html>
    <body> 
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      </body>
      </html>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        //   host: 'mail.YOURDOMAIN.com',
        //   port: 587,
        service: 'gmail',
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ohad159751sa@gmail.com', // generated ethereal user
            pass: '159751sa'  // generated ethereal password
        },
        //   tls:{
        //     rejectUnauthorized:false
        //   }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"Nodemailer Contact" ${req.body.email} `, // sender address
        to: "ohad159751sa@gmail.com", // list of receivers
        subject: 'Node Contact Request', // Subject line
        // text: req.body.message, // plain text body  
        html: output // html body
    };

    // setup email data with unicode symbols
    let mailToClient = { 
        from: `"Nodemailer Contact" "ohad159751sa@gmail.com" `, // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'Thank you for your call.', // Subject line
        // text: req.body.message, // plain text body
        html: "Thank you for your call, we'll contact you as soon as we can, have a good day." // html body
    };


    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('error');
            return console.log(error);
        }
        else {
            transporter.sendMail(mailToClient, (error, info) => {
                if (error) {
                    res.status(500).send('error');
                    return console.log(error);
                }
                else {
                    res.status(200).send(info);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});