// setup server
// YOUR CODE

// setup directory used to serve static files
// YOUR CODE
var express = require('express');
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);
var app = express();
var cors = require('cors');
app.use(cors());

app.use(express.static('public'));
// setup data store
// YOUR CODE
db.defaults({accounts:[]}).write();
// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {
    /*var account = {
      "name" : req.params.name,
        "email"    : req.params.email,
        "balance" : 0,
        "password":req.params.password,
        "transactions" : []

    };
    db.get('accounts').push(account).write();
    console.log(db.get('accounts').value());   
    res.send(db.get('accounts').value());  
    */  
    // YOUR CODE
    // Create account route
    
    var account = {
        "name" : req.params.name,
        "email"    : req.params.email,
        "balance" : 0,
        "password":req.params.password,
        "transactions" : []
    };
    var name = req.params.name;
    var email = req.params.email;
    var password = req.params.password;

    var existing = getAccount(email, { "email": email });

    if(existing != null){
        console.log('Account with email ' + email + ' already exists.');
        res.send('Email already exists, try a different one.');
        return;
    }
    existing = getAccount(name, { "name": name });

    if(existing != null){
        console.log('Account with name ' + name + ' already exists.');
        res.send('Name already exists, try a different one.');
        return;
    }


    db.get('accounts')
        .push(account)
        .write();
    
    var account = db.get('accounts')
        .find({email: email, password: password})
        .value();

    console.log('The account for ' + name + ' was created successfully');
    res.send('The account for ' + name + ' was created successfully, yay');
    // return success or failure string (NEED TO ADD THIS)
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object
    var email = req.params.email;
    var password = req.params.password;  
    var account = getAccount(email, {"email": email, "password": password});  
    if(account != null){
        console.log('Login success');
        res.send('Logged in as '+ email +'.');
        return;
    }
    else{
        console.log('Login failed');
        res.send('Log in failed. Check email and password');
        return;
    }

    // If fail, return null
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var email = req.params.email;
    var account = getAccount(email, {email: email});
    console.log('Retrieved account ' + account.name);
    res.send(account);
   
});

getAccount = function(email, query){
    var account = db.get('accounts')
        .find(query)
        .value();
    return account;
}

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var email = req.params.email;
    var depositamount = req.params.amount;
    var account = getAccount(email, {email: email});
    console.log(account);
    if(account == null){
        console.log('No user');
        res.send('User not found, check email again.');
        return;
    }
    var currentbalance = parseInt(account.balance);
    var newbalance = currentbalance + parseInt(depositamount);
    var transactions = account.transactions;
    transactions.push({Time: new Date(), Action: 'Deposit', Amount: depositamount, Description: "Deposited $" + depositamount})
    account = db.get('accounts')
        .find({email: email})
        .assign({balance: newbalance, transactions: transactions})
        .write();
    console.log('Balance for ' + account.name + ' was credited with ' + depositamount + '. The new balance is ' + account.balance);
    res.send('Balance for ' + account.name + ' was credited with ' + depositamount + '. The new balance is ' + account.balance);
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string

    var email = req.params.email;
    var withdrawamount = req.params.amount;
    var account = getAccount(email, {email:email});
    // need failure string

    if(account == null){
        console.log('No user');
        res.send('User not found, check email again.');
        return;
    }

    var currentbalance = parseInt(account.balance);
    if(currentbalance<withdrawamount){
        res.send('You do not have enough balance, try load more money.');
        return;
    }
    var newbalance = currentbalance - parseInt(withdrawamount);
    var transactions = account.transactions;

    transactions.push({Time: new Date(), Action: 'Withdraw', Amount: withdrawamount, Description: "Withdrew $" + withdrawamount})

    account = db.get('accounts')
        .find({email:email})
        .assign({balance: newbalance, transactions: transactions})
        .write();
    
        console.log('Balance for ' + account.name + 'was reduced by ' + withdrawamount + '. The new balance is ' + account.balance);
        res.send('Balance for ' + account.name + 'was reduced by ' + withdrawamount + '. The new balance is ' + account.balance);
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var email = req.params.email;
    var account = getAccount(email, {email:email});
    if(account == null){
        console.log('No user');
        res.send('User not found, check email again.');
        return;
    }

    res.send(account.transactions);
});

app.get('/account/all', function (req, res) {
    var accounts = db.get('accounts')
        .value();
    res.send(accounts);
    // YOUR CODE
    // Return data for all accounts
});

app.get('/account/balance/:email', function(req,res) {
    var email = req.params.email;
    var account = getAccount(email, {email:email});
    if(account == null){
        console.log('No user');
        res.send('User not found, check email again.');
        return;
    }
    res.send('Balance for ' + account.name + ' is ' + account.balance);
});

//need to start up server
app.listen(3000, function(){
    console.log('Listening at port 3000')
})