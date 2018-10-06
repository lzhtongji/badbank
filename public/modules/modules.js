var ui = {};

ui.navigation = `

`;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
<div class="card-header">Create Account</div>
<div class="card-body">
    <p class="card-text">Name</p>    
    <input type="text" class="form-control" placeholder="Enter Name"  id="createName" aria-describedby="basic-addon3">
    <p class="card-text">   </p>
    <p class="card-text">Email address</p> 
    
    <input type="text" class="form-control" placeholder="Enter Email" id="createEmail" aria-describedby="basic-addon3">
    <p class="card-text">   </p>
    <p class="card-text">Password</p> 
    <input type="password" class="form-control" placeholder="Enter Password"  id="createPassword" aria-describedby="basic-addon3">
    <p class="card-text">   </p>
    <a href="#" class="btn btn-light" onclick = "create()">Create Account</a>
    <div id="status"></div>
</div>
</div> 
`;

ui.login = `
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Login</div>
  <div class="card-body">
    <p class="card-text">Email</p>
    <input type="text" class="form-control" placeholder="Enter Email" id="loginEmail" aria-describedby="basic-addon3">

    <p class="card-text">   </p>
    <p class="card-text">Password</p> 
    <input type="password" class="form-control" placeholder="Enter Password"  id="loginPassword" aria-describedby="basic-addon3">
    <p class="card-text">   </p>

    <a href="#" class="btn btn-light" onclick = "login()">Login</a>
    <div id="status"></div>
  </div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
<div class="card-header">Deposit</div>
<div class="card-body">
  <p class="card-text">Email</p>
  <input type="text" class="form-control" placeholder="Enter Email" id="depositEmail" aria-describedby="basic-addon3">

  <p class="card-text">   </p>
  <p class="card-text">Amount</p> 
  <input type="number" class="form-control" placeholder="Enter amount" value = 0 id="depositAmount" aria-describedby="basic-addon3">
  <p class="card-text">   </p>

  <a href="#" class="btn btn-light" onclick = "deposit()">Deposit</a>
  <div id="status"></div>
</div>
</div>`;

ui.withdraw = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
 <div class="card-header">Withdraw</div>
<div class="card-body">
<p class="card-text">Email</p>
<input type="text" class="form-control" placeholder="Enter Email" id="withdrawEmail" aria-describedby="basic-addon3">

<p class="card-text">   </p>
<p class="card-text">Amount</p> 
<input type="number" class="form-control" placeholder="Enter amount" value = 0 id="withdrawAmount" aria-describedby="basic-addon3">
<p class="card-text">   </p>

<a href="#" class="btn btn-light" onclick = "withdraw()">Withdraw</a>
<div id="status"></div>
  </div>
</div>`;

ui.transactions = `
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
<div class="card-header">Transactions</div>
<div class="card-body">
  <p class="card-text">Email</p>
  <input type="text" class="form-control" placeholder="Enter Email" id="transactionsEmail" aria-describedby="basic-addon3">
  <p class="card-text">   </p>
  <a href="#" class="btn btn-light" onclick = "transactions()">Show Transactions</a>
  <div id="status"></div>
  </div>
</div>`;

ui.balance = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;"><div class="card-header">Balance</div>
<div class="card-body">
  <p class="card-text">Email</p>
  <input type="text" class="form-control" placeholder="Enter Email" id="balanceEmail" aria-describedby="basic-addon3">
  <p class="card-text">   </p>
  <a href="#" class="btn btn-light" onclick = "balance()">Show Balance</a>
  <div id="status"></div>
  </div>
</div>`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
<div class="card-header">BadBank Landing Module</div>
<div class="card-body">
  <h5 class="card-title">Welcome to the bank</h5>
  <p class="card-text">You can move around using the navigation bars.
        <div>
                <img src="bank.png" height="240">
        </div>
</div>`;

ui.allData = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">All Data In Store</h5>
    <a href="#" class="btn btn-primary" onclick = "allData()">Show All Data</a>
  </div>
  <div id="status"></div>
</div>`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML = ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){

    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    
    target.innerHTML = ui.allData;
};

defaultModule();
