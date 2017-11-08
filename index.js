'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const http = require('http');
var request = require('request');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.post('/echo', function(req, res) {


    var response = "";
    var final = ""
    if(req.body.result.action == "echo"){
        var accountNumber = parseInt(req.body.result.parameters.sourceAccountNumber);
        var sourceBankAcctType = req.body.result.parameters.sourceBankAcctType;
       request.post(
            'https://api.msufcuchatbot.me/getBalance/',
            { json: {"accountId": accountNumber, "sourceBankAcctType": sourceBankAcctType,  "code": "amzn1.ask.account.AGPEDC3Y57INSQR2Z7PPA6V7MV3GVNC6X2ZAEBXAIVP2SFA3VOZNLC537ML6Q5NEBPEQEEBT2AITE62N2OPW6YX37QZATHY7RHNGUDY5PHDADMAC5NBBBWSEFDCJR45VA3KOYDRDTGV5J743SAFSFUZFF7XM6Q3RNQTPMB5G24MFWYWBOSATFP7DIE7XG4BHCEUPKTP3ZRVIBFI"} },
            function (error, response) {
                if (!error && response.statusCode == 200) {
                    return res.json({
                        speech: "Your account balance is $" + JSON.stringify(response.body.balance),
                        displayText: "Your account balance is $" + JSON.stringify(response.body.balance),
                        source: 'msufcuchatbot'
                    });
                }
            }
        );
    }
    else if(req.body.result.action == "debug"){
             return res.json({
                speech: JSON.stringify(req.body.originalRequest),
                displayText: JSON.stringify(req.body.originalRequest),
                source: 'msufcuchatbot'
            });
    }
    else if (req.body.result.action == "UpdateInfo.UpdateInfo-custom") {
ww
      //Update user account info intent
      if (req.body.result.parameters) {
        //Parameters for changing account info
        var accountNumber = parseInt(req.body.result.parameters.originalValue);
        var updateInfo = req.body.result.parameters.updateInfo;
        var whatToUpdate = req.body.result.parameters.whatToUpdate;

        // Post to node.js api for `updateInfo`
        request.post(
             'https://api.msufcuchatbot.me/updateInfo/',
             { json: {"accountId": accountNumber,"updateInfo": updateInfo, "whatToUpdate": whatToUpdate , "code": "amzn1.ask.account.AGPEDC3Y57INSQR2Z7PPA6V7MV3GVNC6X2ZAEBXAIVP2SFA3VOZNLC537ML6Q5NEBPEQEEBT2AITE62N2OPW6YX37QZATHY7RHNGUDY5PHDADMAC5NBBBWSEFDCJR45VA3KOYDRDTGV5J743SAFSFUZFF7XM6Q3RNQTPMB5G24MFWYWBOSATFP7DIE7XG4BHCEUPKTP3ZRVIBFI"} },
             function (error, response) {
                 if (!error && response.statusCode == 200) {
                     return res.json({
                         speech: "Succesfully updated!",
                         displayText: "Succesfully updated!",
                         source: 'msufcuchatbot'
                     });
                 }
             }
         );
      }

    }
    else if( req.body.result.action == "internal-transfer") {
        var sourceAccountNumber = parseInt(req.body.result.parameters.sourceAccountNumber);
        var sourceAccountType = req.body.result.parameters.sourceAccountType;
        var destinationAccountType = req.body.result.parameters.destinationAccountType;
        var amount = parseFloat(req.body.result.parameters.amount);
        request.post(
            'https://api.msufcuchatbot.me/internalTransferMoney/',
            { json: {"sourceAccountNumber": sourceAccountNumber, "sourceBankAccountType": sourceAccountType, "destinationBankAccountType": destinationAccountType, "amount":amount, "code": "amzn1.ask.account.AGPEDC3Y57INSQR2Z7PPA6V7MV3GVNC6X2ZAEBXAIVP2SFA3VOZNLC537ML6Q5NEBPEQEEBT2AITE62N2OPW6YX37QZATHY7RHNGUDY5PHDADMAC5NBBBWSEFDCJR45VA3KOYDRDTGV5J743SAFSFUZFF7XM6Q3RNQTPMB5G24MFWYWBOSATFP7DIE7XG4BHCEUPKTP3ZRVIBFI"} },
            function (error, response) {
                if (!error && response.statusCode == 200) {
                    return res.json({
                        speech: "Succesfully transferred $" + JSON.stringify(response.body.amount),
                        displayText: "Succesfully transferred $" + JSON.stringify(response.body.amount),
                        source: 'msufcuchatbot'
                    });
                }
            }
        );
    }
    else if (req.body.result.action == "password-reset") {

      //Update user account info intent
      if (req.body.result.parameters) {
        //Parameters for sending the email
        console.log(req.body.result.parameters);

        var accountNumber = parseInt(req.body.result.parameters.accountNumber);

        request.post('https://api.msufcuchatbot.me/resetPassword/',
        { json: {"accountId": accountNumber, "code": "amzn1.ask.account.AGPEDC3Y57INSQR2Z7PPA6V7MV3GVNC6X2ZAEBXAIVP2SFA3VOZNLC537ML6Q5NEBPEQEEBT2AITE62N2OPW6YX37QZATHY7RHNGUDY5PHDADMAC5NBBBWSEFDCJR45VA3KOYDRDTGV5J743SAFSFUZFF7XM6Q3RNQTPMB5G24MFWYWBOSATFP7DIE7XG4BHCEUPKTP3ZRVIBFI"} },
        function (error, response) {
            if (!error && response.statusCode == 200) {
                return res.json({
                    speech: "You'll be receiving an email shortly!",
                    displayText: "You'll be receiving an email shortly!",
                    source: 'msufcuchatbot'
                });
            }
        }
        )

      }

    }
    else if(req.body.result.action == "autopay-setup"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var autopayShare = req.body.result.parameters.autopayShare;
      var sourceShare = req.body.result.parameters.sourceShare;
      var autopayAmount = req.body.result.parameters.autopayAmount;

      request.post('https://api.msufcuchatbot.me/autopaySetup/',
        {json: {"accountNumber": accountNumber, "autopayShare": autopayShare,
          "sourceShare": sourceShare, "autopayAmount": autopayAmount}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Okay, starting automatic payments. On the "
                  + response.body.autopayDate
                  + " of every month, $" + response.body.autopayAmount
                  + " will be paid to your " + response.body.autopayShare
                  + " from your " + response.body.sourceShare + ". Is this correct?",
                displayText: "Okay, starting automatic payments. On the "
                  + response.body.autopayDate + " of every month, $"
                  + response.body.autopayAmount + " will be paid to your "
                  + response.body.autopayShare + " from your "
                  + response.body.sourceShare + ". Is this correct?",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "autopay-setup-yes"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var autopayShare = req.body.result.parameters.autopayShare;
      var sourceShare = req.body.result.parameters.sourceShare;
      var autopayAmount = req.body.result.parameters.autopayAmount;
      request.post('https://api.msufcuchatbot.me/autopaySetupYes/',
        {json: {"accountNumber": accountNumber, "autopayShare": autopayShare,
          "sourceShare": sourceShare, "autopayAmount": autopayAmount}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Alright, your automatic payments have been set up. Thanks!",
                displayText: "Alright, your automatic payments have been set up. Thanks!",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "autopay-cancel"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var autopayShare = req.body.result.parameters.autopayShare;
      request.post('https://api.msufcuchatbot.me/autopayCancel/',
        {json: {"accountNumber": accountNumber, "autopayShare": autopayShare}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Okay, canceling automatic payments for your "
                  + response.body.autopayShare + ". Is this correct?",
                displayText: "Okay, canceling automatic payments for your "
                    + response.body.autopayShare + ". Is this correct?",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "autopay-cancel-yes"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var autopayShare = req.body.result.parameters.autopayShare;
      var sourceShare = req.body.result.parameters.sourceShare;
      var autopayAmount = req.body.result.parameters.autopayAmount;
      request.post('https://api.msufcuchatbot.me/autopayCancelYes/',
        {json: {"accountNumber": accountNumber, "autopayShare": autopayShare,
          "sourceShare": sourceShare, "autopayAmount": autopayAmount}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Alright, your automatic payments have been canceled.",
                displayText: "Alright, your automatic payments have been canceled.",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "loan-payment"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var loanShare = req.body.result.parameters.loanShare;
      var sourceShare = req.body.result.parameters.sourceShare;
      var paymentAmount = req.body.result.parameters.paymentAmount;
      request.post('https://api.msufcuchatbot.me/loanPayment/',
        {json: {"accountNumber": accountNumber, "loanShare": loanShare,
          "sourceShare": sourceShare, "paymentAmount": paymentAmount}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Okay, making a loan payment. $" + response.body.autopayAmount
                  + " will be paid to your " + response.body.autopayShare
                  + " from your " + response.body.sourceShare + ". Is this correct?",
                displayText: "Okay, making a loan payment. $" + response.body.autopayAmount
                    + " will be paid to your " + response.body.autopayShare
                    + " from your " + response.body.sourceShare + ". Is this correct?",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "loan-payment-yes"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var loanShare = req.body.result.parameters.loanShare;
      var sourceShare = req.body.result.parameters.sourceShare;
      var paymentAmount = req.body.result.parameters.paymentAmount;
      request.post('https://api.msufcuchatbot.me/loanPaymentYes/',
        {json: {"accountNumber": accountNumber, "loanShare": loanShare,
          "sourceShare": sourceShare, "paymentAmount": paymentAmount}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Alright, your loan payment has been applied. Thanks!",
                displayText: "Alright, your loan payment has been applied. Thanks!",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "get-due-date"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var loanShare = req.body.result.parameters.loanShare;
      request.post('https://api.msufcuchatbot.me/getDueDate/',
        {json: {"accountNumber": accountNumber, "loanShare": loanShare}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Your current due date for your "
                + loanShare + "is the " + response.body.dueDate + " of the month.",
                displayText: "Your current due date for your " + loanShare
                + "is the " + response.body.dueDate + " of the month.",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "change-due-date"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var loanShare = req.body.result.parameters.loanShare;
      var newDate = req.body.result.parameters.newDate;
      request.post('https://api.msufcuchatbot.me/changeDueDate/',
        {json: {"accountNumber": accountNumber, "loanShare": loanShare,
          "newDate": newDate}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Alright, changing the due date for your "
                + loanShare + " from the " + response.body.oldDate + " to the "
                + newDate + ". Is this correct?",
                displayText: "Alright, changing the due date for your "
                + loanShare + " from the " + response.body.oldDate + " to the "
                + newDate + ". Is this correct?",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if(req.body.result.action == "change-due-date-yes"){
      var accountNumber = req.body.result.parameters.accountNumber;
      var loanShare = req.body.result.parameters.loanShare;
      var newDate = req.body.result.parameters.newDate;
      request.post('https://api.msufcuchatbot.me/changeDueDateYes/',
      {json: {"accountNumber": accountNumber, "loanShare": loanShare,
        "newDate": newDate}},
          function(error, response){
            if (!error && response.statusCode == 200) {
              return res.json({speech: "Alright, your due date has been changed.",
                displayText: "Alright, your due date has been changed.",
                source: 'msufcuchatbot'
              });
            }
          }
      );
    }
    else if (req.body.result.action == "external-transfer") {
        var sourceAccountNumber = parseInt(req.body.result.parameters.sourceAccountNumber);
        var sourceAccountType = req.body.result.parameters.sourceAccountType;
        var destinationAccountNumber = parseInt(req.body.result.parameters.destinationAccountNumber);
        var amount = parseFloat(req.body.result.parameters.amount);

        request.post(
            'https://api.msufcuchatbot.me/externaltransferMoney/',
            {
              json: {
                "sourceAccountType": sourceAccountType,
                "sourceAccountNumber": sourceAccountNumber,
                "destinationAccountNumber":destinationAccountNumber,
                "amount":amount,
                "code": "amzn1.ask.account.AGPEDC3Y57INSQR2Z7PPA6V7MV3GVNC6X2ZAEBXAIVP2SFA3VOZNLC537ML6Q5NEBPEQEEBT2AITE62N2OPW6YX37QZATHY7RHNGUDY5PHDADMAC5NBBBWSEFDCJR45VA3KOYDRDTGV5J743SAFSFUZFF7XM6Q3RNQTPMB5G24MFWYWBOSATFP7DIE7XG4BHCEUPKTP3ZRVIBFI"
              }
            },
            function (error, response) {
                if (!error && response.statusCode == 200) {
                  return res.json({
                      speech: "Successfully transferred $" + JSON.stringify(response.body.amount),
                      displayText: "Successfully transferred $" + JSON.stringify(response.body.amount),
                      source: 'msufcuchatbot'
                  });
                }
            }
        );
    }
});


app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
