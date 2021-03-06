var express = require('express');
// Initialize the Router
var router = express.Router();
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');
//var transporter = nodemailer.createTransport("Sendmail", "/usr/sbin/sendmail");
var transporter = nodemailer.createTransport(sendmailTransport({
    path: "/usr/sbin/sendmail"
}));


// var options = {
//     auth: {
//         api_user: process.env['SENDGRID_USERNAME'],
//         api_key: process.env['SENDGRID_PASSWORD']
//     }
// }

// mailer.sendMail(email, function(err, res) {
//     if (err) { 
//         console.log(err) 
//     }
//     console.log(res);
// });

 // transporter.sendMail(email, function(error, response){
 //                if(error){
 //                    console.log('Email: Error occured');
 //                    console.log(error.message);
 //                    return;
 //                } else{
 //                    console.log(response);
 //                    console.log('Message sent successfully!');
 //                }
 // });

// Setup the Route
router.post('/', function (req, res, next) {
		var formContent = req.body
    // show the request body in the command line
    var email = {
	    to: 'info@regalpuffincoffee.com',
	    from: 'info@regalpuffincoffee.com',
	    subject: 'New Regal Puffin Mailing List Addition',
	    html: "<p>Please add <br><strong> " + formContent.email + "</strong> to the list.</p>"
  	};

    transporter.sendMail(email, function(error, response){
                if(error){
                    console.log('Email: Error occured');
                    console.log(error.message);
                    return;
                } else{
                    console.log(response);
                    console.log('Message sent successfully!');
                }
 });
    // return a json response to angular
    res.json({
        'msg': 'success!'
    });
});

// Expose the module
module.exports = router;
